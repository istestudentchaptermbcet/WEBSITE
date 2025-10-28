import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUsers, FaLightbulb, FaBookOpen, FaHandshake, FaMicrophone, FaTools, FaUsersCog } from "react-icons/fa";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-t-transparent rounded-full mx-auto"
            style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl font-bold font-[Poppins]"
            style={{ color: 'var(--text-primary)' }}
          >
            Loading...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-6 py-24 space-y-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10"
            style={{ backgroundColor: 'var(--accent-primary)' }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-10"
            style={{ backgroundColor: 'var(--accent-secondary)' }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full opacity-10"
            style={{ backgroundColor: 'var(--accent-primary)' }}
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 60, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 relative z-10"
        >
          <motion.h1
            className="text-5xl md:text-8xl font-bold font-[Poppins] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            ISTE MBCET
          </motion.h1>

          <motion.div
            className="text-xl md:text-3xl font-[Inter] font-medium"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Student Chapter
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-lg md:text-xl font-[Inter] leading-relaxed relative z-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          Empowering students through innovation, leadership, and technological excellence.
          Join our community of innovators shaping the future of technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/join-us">
              <button className="px-10 py-5 font-[Poppins] font-semibold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl glass border-2" style={{ backgroundColor: 'var(--glass-bg)', color: 'var(--text-primary)', borderColor: 'var(--glass-border)' }}>
                Join Our Community
              </button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/events">
              <button className="px-10 py-5 font-[Poppins] font-semibold text-lg rounded-xl border-2 transition-all duration-300 glass hover:shadow-xl" style={{ backgroundColor: 'var(--glass-bg)', color: 'var(--text-primary)', borderColor: 'var(--glass-border)' }}>
                Explore Events
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        className="px-6 md:px-16 py-20"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-[Poppins] tracking-tight"
              style={{ color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Who We Are
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl font-[Inter] leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ISTE Student Chapter MBCET is a hub for innovators, tech enthusiasts, and creators.
              We organize workshops, events, and state conventions to empower students in technology and leadership.
              Join us in shaping the future of technology through collaboration and innovation.
            </motion.p>
            <motion.div
              className="p-6 rounded-lg shadow-sm border glass"
              style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-[Poppins] mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>Our Mission</h3>
              <p className="font-[Inter]" style={{ color: 'var(--text-secondary)' }}>
                To foster technological excellence and leadership among students through innovative programs,
                industry connections, and collaborative learning experiences.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FaUsers, title: "Community" },
                { icon: FaLightbulb, title: "Innovation" },
                { icon: FaBookOpen, title: "Learning" },
                { icon: FaHandshake, title: "Collaboration" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-xl shadow-sm border glass text-center space-y-3"
                  style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <item.icon className="text-4xl mx-auto" style={{ color: 'var(--text-secondary)' }} />
                  <h4 className="font-[Poppins] font-semibold" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Events Section */}
      <motion.div
        className="px-6 md:px-16 py-20"
        style={{ backgroundColor: 'var(--bg-primary)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center space-y-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-[Poppins] tracking-tight"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Events
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Tech Talks",
                desc: "Learn from industry leaders about latest tech trends and innovations.",
                icon: FaMicrophone
              },
              {
                title: "Workshops",
                desc: "Hands-on sessions for real-world skills and practical knowledge.",
                icon: FaTools
              },
              {
                title: "State Conventions",
                desc: "Collaborate with students across colleges and expand your network.",
                icon: FaUsersCog
              },
            ].map((event, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-xl border glass hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <event.icon className="text-4xl mx-auto mb-6" style={{ color: 'var(--text-secondary)' }} />
                <h3 className="text-2xl font-bold font-[Poppins] mb-4" style={{ color: 'var(--text-primary)' }}>
                  {event.title}
                </h3>
                <p className="font-[Inter] text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Gallery Preview */}
      <motion.div
        className="px-6 md:px-16 py-20"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-[Poppins] text-center tracking-tight"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Photo Gallery
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[team1, team2, team3, team4, team1, team2, team3, team4].map((img, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-lg shadow-sm border overflow-hidden glass hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/gallery">
                <motion.button
                  className="px-8 py-4 font-[Poppins] font-semibold rounded-lg border-2 glass transition-all duration-300"
                  style={{ backgroundColor: 'var(--glass-bg)', color: 'var(--text-primary)', borderColor: 'var(--glass-border)' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Full Gallery
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="px-6 md:px-16 py-20"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center p-12 rounded-lg shadow-sm border glass" style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6 tracking-tight"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Join the Community?
          </motion.h2>
          <motion.p
            className="font-[Inter] text-lg mb-8"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Become part of a vibrant community of innovators, creators, and tech enthusiasts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/join-us">
              <motion.button
                className="px-10 py-5 font-[Poppins] font-bold text-xl rounded-lg transition-all duration-300 shadow-lg"
                style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join ISTE MBCET
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
