const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/iste-sc-mbcet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Google Sheets authentication
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json', // Path to your service account key file
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID; // Your Google Sheet ID

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, default: 'Member' },
  eventsJoined: { type: Number, default: 0 },
  upcomingEvents: { type: Number, default: 0 },
  about: { type: String, default: '' },
  profileImage: { type: String, default: '/images/profile-placeholder.jpg' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Event Schema
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  maxParticipants: { type: Number, default: 100 },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

const Event = mongoose.model('Event', eventSchema);

// Team Member Schema
const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  image: { type: String, required: true },
  linkedin: { type: String },
  github: { type: String },
  email: { type: String }
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Routes

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Create token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || 'your-secret-key');

    res.status(201).json({ token, user: { _id: user._id, name, email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

    // Create token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || 'your-secret-key');

    res.json({ token, user: { _id: user._id, name: user.name, email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User Routes
app.get('/api/users/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/api/users/profile', verifyToken, async (req, res) => {
  try {
    const { name, about, profileImage } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, about, profileImage },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Event Routes
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find().populate('participants', 'name email');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/events/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('participants', 'name email');
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/events', verifyToken, async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/api/events/:id/join', verifyToken, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (event.participants.includes(req.user._id)) {
      return res.status(400).json({ message: 'Already joined this event' });
    }

    event.participants.push(req.user._id);
    await event.save();

    // Update user's eventsJoined count
    await User.findByIdAndUpdate(req.user._id, { $inc: { eventsJoined: 1 } });

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Team Routes
app.get('/api/team', async (req, res) => {
  try {
    const team = await TeamMember.find();
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/team', verifyToken, async (req, res) => {
  try {
    const teamMember = new TeamMember(req.body);
    await teamMember.save();
    res.status(201).json(teamMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Email Route
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Google Sheets Route for Join Us applications
app.post('/api/join-us', async (req, res) => {
  try {
    const { name, email, phone, branch, year, interests, experience, expectations } = req.body;

    // Prepare data for Google Sheets
    const values = [[
      new Date().toISOString(), // Timestamp
      name,
      email,
      phone,
      branch,
      year,
      interests,
      experience,
      expectations
    ]];

    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'JoinUs!A:I', // Assuming the sheet is named 'JoinUs' and has columns A to I
      valueInputOption: 'RAW',
      resource: { values },
    });

    // Send email notification
    const emailHtml = `
      <h2>New Join Us Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Branch:</strong> ${branch}</p>
      <p><strong>Year:</strong> ${year}</p>
      <p><strong>Interests:</strong> ${interests}</p>
      <p><strong>Experience:</strong> ${experience}</p>
      <p><strong>Expectations:</strong> ${expectations}</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'iste.mbcet@gmail.com', // Change this to your ISTE email
      subject: 'New Join Us Application - ISTE SC MBCET',
      html: emailHtml
    });

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ message: 'Error submitting application' });
  }
});

// Gallery Routes (placeholder for now)
app.get('/api/gallery', async (req, res) => {
  try {
    // Return placeholder gallery data
    const gallery = [
      { id: 1, image: '/src/assets/team1.jpg', title: 'Team Meeting', description: 'ISTE SC MBCET team collaboration' },
      { id: 2, image: '/src/assets/team2.jpg', title: 'Workshop Session', description: 'Hands-on learning experience' },
      { id: 3, image: '/src/assets/team3.jpg', title: 'Event Celebration', description: 'Successful event completion' },
      { id: 4, image: '/src/assets/team4.jpg', title: 'Tech Talk', description: 'Industry expert sharing knowledge' },
    ];
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
