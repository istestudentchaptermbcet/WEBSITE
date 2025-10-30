import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      title: "Tech Talk Series",
      date: "Every Friday",
      desc: "Weekly sessions with industry experts discussing latest technologies, trends, and innovations in the tech world.",
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
      attendees: "50+"
    },
    {
      title: "Hands-on Workshops",
      date: "Monthly",
      desc: "Interactive workshops covering web development, AI/ML, cybersecurity, and emerging technologies with practical projects.",
      icon: "⚡",
      color: "from-blue-500 to-purple-500",
      attendees: "30+"
    },
    {
      title: "ISTE Hackathon",
      date: "Quarterly",
      desc: "48-hour coding marathon where teams build innovative solutions to real-world problems with exciting prizes.",
      icon: "🚀",
      color: "from-pink-500 to-red-500",
      attendees: "100+"
    },
    {
      title: "State Convention",
      date: "Annual",
      desc: "Grand annual event bringing together ISTE chapters from across the state for networking and knowledge sharing.",
      icon: "🌟",
      color: "from-green-500 to-blue-500",
      attendees: "500+"
    },
    {
      title: "Startup Pitch Fest",
      date: "Bi-annual",
      desc: "Platform for student entrepreneurs to pitch their innovative ideas to industry mentors and potential investors.",
      icon: "💡",
      color: "from-yellow-500 to-orange-500",
      attendees: "75+"
    },
    {
      title: "Alumni Connect",
      date: "Monthly",
      desc: "Networking sessions with successful alumni sharing their career journeys and providing guidance to students.",
      icon: "🤝",
      color: "from-indigo-500 to-purple-500",
      attendees: "40+"
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[Orbitron] text-primary mb-6 tracking-wider">
            Our Events
          </h1>
          <p className="text-secondary text-lg md:text-xl font-[Exo_2] max-w-3xl mx-auto leading-relaxed">
            Discover exciting opportunities to learn, grow, and connect with fellow tech enthusiasts through our diverse range of events and activities.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 30px 60px -12px rgba(147, 51, 234, 0.3)"
              }}
              className="glass p-8 rounded-3xl glow group cursor-pointer relative overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    `linear-gradient(45deg, rgba(147, 51, 234, 0.05), transparent, rgba(236, 72, 153, 0.05))`,
                    `linear-gradient(45deg, rgba(236, 72, 153, 0.05), transparent, rgba(59, 130, 246, 0.05))`,
                    `linear-gradient(45deg, rgba(59, 130, 246, 0.05), transparent, rgba(147, 51, 234, 0.05))`
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
                  style={{
                    left: `${15 + i * 25}%`,
                    top: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1.2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                />
              ))}

              <div className="space-y-6 relative z-10">
                <motion.div
                  className={`text-6xl bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {event.icon}
                </motion.div>

                <div className="space-y-3">
                  <motion.h3
                    className="text-2xl font-bold font-[Audiowide] text-primary group-hover:text-purple-400 transition-colors duration-300"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(147, 51, 234, 0.3)",
                        "0 0 20px rgba(236, 72, 153, 0.4)",
                        "0 0 10px rgba(147, 51, 234, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {event.title}
                  </motion.h3>
                  <div className="flex justify-between items-center">
                    <motion.span
                      className="text-sm font-[Exo_2] text-secondary bg-purple-500/20 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
                    >
                      {event.date}
                    </motion.span>
                    <motion.span
                      className="text-sm font-[Exo_2] text-secondary"
                      whileHover={{ scale: 1.05, color: "#c4b5fd" }}
                    >
                      {event.attendees} attendees
                    </motion.span>
                  </div>
                </div>

                <motion.p
                  className="text-secondary font-[Exo_2] text-base leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {event.desc}
                </motion.p>

                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 glass text-primary font-[Exo_2] font-semibold rounded-xl glow transition-all duration-500 relative overflow-hidden group/button"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
                        "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">Learn More</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center glass p-12 rounded-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[Orbitron] text-primary mb-6 tracking-wide">
            Ready to Participate?
          </h2>
          <p className="text-secondary font-[Exo_2] text-lg mb-8 max-w-2xl mx-auto">
            Join our vibrant community and be part of exciting events that will shape your future in technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(147, 51, 234, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-[Audiowide] font-bold text-xl rounded-2xl glow"
          >
            Join Our Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
