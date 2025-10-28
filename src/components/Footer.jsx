import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Execom", path: "/execom" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Join Us", path: "/join-us" }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "www.linkedin.com/in/iste-student-chapter-mbcet-b87363347", icon: FaLinkedinIn },
    { name: "Instagram", url: "https://www.instagram.com/istembcet/", icon: FaInstagram },

  ];

  return (
    <footer className="glass mt-20" style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 relative"
          >
            <motion.h3
              className="text-2xl font-bold font-[Sterion] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              style={{ color: 'var(--text-primary)' }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {"ISTE MBCET".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="inline-block hover:scale-110 transition-transform duration-300"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h3>
            <motion.p
              className="font-[Exo_2] leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Empowering students through technology, innovation, and leadership.
              Building the future of tech, one project at a time.
            </motion.p>
            {/* Animated particles around logo */}
            <div className="absolute -inset-4 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
                  initial={{ scale: 0, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold font-[Audiowide]" style={{ color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="font-[Exo_2] transition-colors duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold font-[Audiowide]" style={{ color: 'var(--text-primary)' }}>Contact Us</h4>
            <div className="space-y-2 font-[Exo_2]" style={{ color: 'var(--text-secondary)' }}>
              <p>📧 istestudentchapter@mbcet.ac.in</p>
              <p>📱 +91 9539066643</p>
              <p>📍 MBCET Campus</p>
              <p>🏛️ Trivandrum, Kerala</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold font-[Audiowide]" style={{ color: 'var(--text-primary)' }}>Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl glass p-3 rounded-xl glow transition-all duration-300 relative overflow-hidden"
                  title={social.name}
                  style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t pt-8 text-center relative"
          style={{ borderColor: 'var(--text-secondary)' }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 left-1/4 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0
              }}
            />
            <motion.div
              className="absolute top-0 right-1/4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1
              }}
            />
            <motion.div
              className="absolute bottom-0 left-1/3 w-1 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"
              animate={{
                y: [0, 20, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="font-[Exo_2]"
              style={{ color: 'var(--text-secondary)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              &copy; {currentYear} ISTE MBCET. All rights reserved.
            </motion.p>
            <div className="flex space-x-6 text-sm font-[Exo_2]" style={{ color: 'var(--text-secondary)' }}>
              {["Privacy Policy", "Terms of Service", "Code of Conduct"].map((link, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="transition-colors relative"
                  whileHover={{ scale: 1.1, color: 'var(--accent-primary)' }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="relative z-10">{link}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
