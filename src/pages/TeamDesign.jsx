import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

export default function TeamDesign() {
  const teamMembers = [
    {
      name: "Sindhu",
      role: "Design Lead",
      img: team2,
      bio: "Creative visionary who brings imagination to life through design and innovative visual experiences.",
      skills: ["Graphic Design", "UI/UX", "Brand Strategy"]
    },
    {
      name: "Sophie Brown",
      role: "UI Designer",
      img: team1,
      bio: "User interface designer who creates intuitive and beautiful digital experiences.",
      skills: ["UI Design", "User Research", "Prototyping"]
    },
    {
      name: "Kevin Zhang",
      role: "Graphic Designer",
      img: team3,
      bio: "Graphic designer who creates stunning visuals that capture attention and convey messages.",
      skills: ["Graphic Design", "Adobe Creative Suite", "Visual Communication"]
    },
    {
      name: "Anna Taylor",
      role: "Brand Designer",
      img: team4,
      bio: "Brand strategist who develops cohesive visual identities and brand experiences.",
      skills: ["Brand Design", "Identity Design", "Marketing Materials"]
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
            Design Team
          </h1>
          <p className="text-secondary text-lg md:text-xl font-[Exo_2] max-w-3xl mx-auto leading-relaxed">
            Our design team creates visually stunning experiences that bring ISTE MBCET's vision to life through innovative design solutions.
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
            To create design solutions that not only look beautiful but also communicate effectively and enhance user experiences.
            We believe that great design has the power to inspire, engage, and transform how people interact with technology and our community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
