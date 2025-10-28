import { motion } from "framer-motion";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

export default function Gallery() {
  const galleryItems = [
    { img: team1, title: "Tech Talk Session", category: "Events" },
    { img: team2, title: "Workshop in Action", category: "Workshops" },
    { img: team3, title: "Team Building", category: "Community" },
    { img: team4, title: "Hackathon Winners", category: "Achievements" },
    { img: team1, title: "Guest Speaker", category: "Events" },
    { img: team2, title: "Project Showcase", category: "Projects" },
    { img: team3, title: "Study Group", category: "Learning" },
    { img: team4, title: "Cultural Fest", category: "Celebrations" },
    { img: team1, title: "Alumni Meet", category: "Networking" },
    { img: team2, title: "Innovation Lab", category: "Facilities" },
    { img: team3, title: "Award Ceremony", category: "Achievements" },
    { img: team4, title: "Group Discussion", category: "Learning" }
  ];

  const categories = ["All", "Events", "Workshops", "Community", "Achievements", "Projects", "Learning"];

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
            Photo Gallery
          </h1>
          <p className="text-secondary text-lg md:text-xl font-[Exo_2] max-w-3xl mx-auto leading-relaxed">
            Explore the vibrant moments, achievements, and memories that define our ISTE MBCET community.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 glass text-primary font-[Exo_2] font-semibold rounded-2xl glow transition-all duration-300 hover:bg-purple-500/20"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, rotateX: -25 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.12,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{
                scale: 1.08,
                y: -15,
                rotateY: 5,
                boxShadow: "0 35px 70px -12px rgba(147, 51, 234, 0.4)"
              }}
              className="glass overflow-hidden rounded-3xl cursor-pointer group relative"
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                style={{
                  background: "conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.6), transparent)",
                  padding: "3px"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-transparent rounded-3xl" />
              </motion.div>

              {/* Floating Particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
                  style={{
                    left: `${10 + i * 20}%`,
                    top: `${15 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "easeInOut"
                  }}
                />
              ))}

              <div className="relative overflow-hidden rounded-3xl">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  whileHover={{ filter: "contrast(1.1) saturate(1.2)" }}
                />

                {/* Animated Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.h3
                      className="text-white font-[Audiowide] text-lg font-bold mb-2"
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(255, 255, 255, 0.5)",
                          "0 0 20px rgba(147, 51, 234, 0.8)",
                          "0 0 10px rgba(255, 255, 255, 0.5)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.span
                      className="text-purple-200 font-[Exo_2] text-sm bg-gradient-to-r from-purple-500/40 to-pink-500/40 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-400/30"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)"
                      }}
                    >
                      {item.category}
                    </motion.span>
                  </motion.div>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(147, 51, 234, 0.2), transparent, rgba(236, 72, 153, 0.2))",
                      "linear-gradient(45deg, rgba(236, 72, 153, 0.2), transparent, rgba(59, 130, 246, 0.2))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.2), transparent, rgba(147, 51, 234, 0.2))"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 glass p-12 rounded-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[Orbitron] text-primary mb-6 tracking-wide">
            Capture Your Moment
          </h2>
          <p className="text-secondary font-[Exo_2] text-lg mb-8 max-w-2xl mx-auto">
            Be part of creating memories that will inspire future generations of tech enthusiasts.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(147, 51, 234, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-[Audiowide] font-bold text-xl rounded-2xl glow"
          >
            Share Your Photos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
