import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

export default function TeamContentDocumentation() {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Content Lead",
      img: team2,
      bio: "Storyteller and educator who creates engaging content to inspire and educate our community.",
      skills: ["Technical Writing", "Education", "Communication"]
    },
    {
      name: "Tom Anderson",
      role: "Technical Writer",
      img: team3,
      bio: "Technical writer who transforms complex concepts into clear, accessible content.",
      skills: ["Technical Writing", "Documentation", "Research"]
    },
    {
      name: "Nina Patel",
      role: "Documentation Specialist",
      img: team1,
      bio: "Documentation expert who ensures all our processes and knowledge are properly recorded.",
      skills: ["Documentation", "Knowledge Management", "Process Optimization"]
    },
    {
      name: "Chris Lee",
      role: "Content Strategist",
      img: team4,
      bio: "Strategic thinker who plans and executes content initiatives that drive engagement.",
      skills: ["Content Strategy", "SEO", "Analytics"]
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
          <Link
            to="/execom"
            className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-[Audiowide] font-bold text-sm rounded-2xl glow transition-all duration-300 hover:scale-105"
          >
            ← Back to Execom
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[Orbitron] text-primary mb-6 tracking-wider">
            Content & Documentation Team
          </h1>
          <p className="text-secondary text-lg md:text-xl font-[Exo_2] max-w-3xl mx-auto leading-relaxed">
            Our content and documentation team creates comprehensive resources, technical documentation, and educational materials that empower our community.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>

        {/* Team Mission */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center glass p-12 rounded-3xl mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[Orbitron] text-primary mb-6 tracking-wide">
            Our Mission
          </h2>
          <p className="text-secondary font-[Exo_2] text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            To create a knowledge repository that serves as the foundation for learning and growth within ISTE MBCET.
            We believe that well-documented processes, comprehensive guides, and engaging content are essential for building a sustainable and informed tech community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
