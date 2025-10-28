import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TeamCard({ name, role, img, bio, skills, isTeamLead, teamName }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      whileHover={{
        y: -15,
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)"
      }}
      className="glass p-8 rounded-3xl glow group cursor-pointer relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(147, 51, 234, 0.05), transparent, rgba(236, 72, 153, 0.05))",
            "linear-gradient(45deg, rgba(236, 72, 153, 0.05), transparent, rgba(59, 130, 246, 0.05))",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), transparent, rgba(147, 51, 234, 0.05))"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="text-center space-y-6 relative z-10">
        {/* Profile Image */}
        <motion.div
          whileHover={{
            scale: 1.15,
            rotate: 5,
            boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative mx-auto w-32 h-32"
        >
          <motion.img
            src={img}
            alt={name}
            className="w-full h-full object-cover rounded-full border-4 border-purple-400/30 shadow-xl"
            whileHover={{ filter: "brightness(1.1) contrast(1.1)" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
                "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              background: "conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.5), transparent)",
              padding: "2px"
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full bg-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Name and Role */}
        <div className="space-y-2">
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
            {name}
          </motion.h3>
          <motion.p
            className="text-secondary font-[Exo_2] font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
          >
            {role}
          </motion.p>
        </div>

        {/* Bio */}
        {bio && (
          <motion.p
            className="text-secondary font-[Exo_2] text-base leading-relaxed"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {bio}
          </motion.p>
        )}

        {/* Skills */}
        {skills && (
          <div className="space-y-3">
            <h4 className="text-lg font-bold font-[Audiowide] text-primary">Skills</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)"
                  }}
                  className="px-3 py-1 glass text-primary font-[Exo_2] text-sm rounded-full glow transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* View Team Button for Team Leads */}
        {isTeamLead && teamName && (
          <motion.div className="pt-4">
            <Link to={`/team/${teamName.toLowerCase().replace(/\s+/g, '-')}`}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-[Audiowide] font-bold text-sm rounded-2xl glow transition-all duration-300"
              >
                View Team
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* Social Links Placeholder */}
        <div className="flex justify-center space-x-4 pt-4">
          {['💼', '📧', '🐦'].map((icon, idx) => (
            <motion.button
              key={idx}
              whileHover={{
                scale: 1.3,
                rotate: 10,
                boxShadow: "0 0 25px rgba(147, 51, 234, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-xl glass p-3 rounded-xl glow transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <span className="relative z-10">{icon}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
