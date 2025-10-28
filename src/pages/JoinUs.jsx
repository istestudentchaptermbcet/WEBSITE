import { motion } from "framer-motion";
import { useState } from "react";
import { authAPI } from "../services/api";

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    year: '',
    interests: '',
    experience: '',
    motivation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit to Google Sheets and send email
      const response = await fetch('http://localhost:5000/api/join-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Application submitted successfully! We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          branch: '',
          year: '',
          interests: '',
          experience: '',
          motivation: ''
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    }
  };

  const benefits = [
    {
      icon: "🚀",
      title: "Skill Development",
      desc: "Enhance your technical skills through workshops and hands-on projects."
    },
    {
      icon: "🤝",
      title: "Networking",
      desc: "Connect with industry professionals and like-minded peers."
    },
    {
      icon: "🏆",
      title: "Leadership",
      desc: "Develop leadership skills through organizing events and team projects."
    },
    {
      icon: "💡",
      title: "Innovation",
      desc: "Work on cutting-edge projects and innovative solutions."
    }
  ];

  return (
    <section className="pt-24 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold font-[Orbitron] text-primary mb-6 tracking-wider">
            Join Our Community
          </h1>
          <p className="text-secondary text-lg md:text-xl font-[Exo_2] max-w-3xl mx-auto leading-relaxed">
            Become part of a vibrant community of innovators, creators, and tech enthusiasts.
            Join ISTE MBCET and embark on a journey of growth, learning, and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[Audiowide] text-primary mb-8">
              Why Join ISTE?
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-6 rounded-2xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold font-[Exo_2] text-primary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-secondary font-[Exo_2] leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[Audiowide] text-primary mb-8 text-center">
              Apply Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-secondary font-[Exo_2] mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 glass text-primary font-[Exo_2] rounded-xl focus:glow transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-secondary font-[Exo_2] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 glass text-primary font-[Exo_2] rounded-xl focus:glow transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-secondary font-[Exo_2] mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 glass text-primary font-[Exo_2] rounded-xl focus:glow transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-secondary font-[Exo_2] mb-2">Branch</label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="w-full p-3 glass text-primary font-[Exo_2] rounded-xl focus:glow transition-all duration-300"
                  >
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="ME">ME</option>
                    <option value="CE">CE</option>
                    <option value="EE">EE</option>
                    <option value="EE">EL</option>
                    <option value="EE">CT</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-secondary font-[Exo_2] mb-2">Year of Study</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full p-3 glass text-primary font-[Exo_2] rounded-xl focus:glow transition-all duration-300"
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              <div>
                <label className="block text-secondary font-[Exo_2] mb-2">Areas of Interest</label>
                <textarea
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full p-3 glass text-primary font-[Exo_2] rounded-xl focus:glow transition-all duration-300 resize-none"
                  placeholder="Web Development, AI/ML, Robotics, etc."
                />
              </div>

              <div>
                <label className="block text-secondary font-[Exo_2] mb-2">Previous Experience</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 glass text-primary font-[Exo_2] rounded-xl focus:glow transition-all duration-300 resize-none"
                  placeholder="Any projects, internships, or relevant experience..."
                />
              </div>

              <div>
                <label className="block text-secondary font-[Exo_2] mb-2">Why do you want to join ISTE?</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 glass text-primary font-[Exo_2] rounded-xl focus:glow transition-all duration-300 resize-none"
                  placeholder="Tell us about your motivation and what you hope to achieve..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-[Audiowide] font-bold text-xl rounded-2xl glow transition-all duration-300"
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Additional Info */}
        
      </div>
    </section>
  );
}
