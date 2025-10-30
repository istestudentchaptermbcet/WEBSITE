import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

export default function TeamEventManagement() {
  const teamMembers = [
    {
      name: "Sruthi",
      role: "Event Lead",
      img: team3,
      bio: "Dynamic organizer with a knack for creating memorable experiences and managing large-scale events.",
      skills: ["Event Planning", "Project Management", "Leadership"]
    },
    {
      name: "Lisa Wong",
      role: "Event Coordinator",
      img: team1,
      bio: "Detail-oriented coordinator who ensures every event runs smoothly from start to finish.",
      skills: ["Event Coordination", "Vendor Management", "Timeline Planning"]
    },
    {
      name: "David Kim",
      role: "Logistics Manager",
      img: team2,
      bio: "Logistics expert who handles all the behind-the-scenes work to make events successful.",
      skills: ["Logistics", "Operations", "Problem Solving"]
    },
    {
      name: "Maria Garcia",
      role: "Event Designer",
      img: team4,
      bio: "Creative designer who brings events to life with innovative themes and setups.",
      skills: ["Event Design", "Theming", "Creative Direction"]
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
            Event Management Team
          </h1>
          <p className="text-secondary text-lg md:text-xl font-[Exo_2] max-w-3xl mx-auto leading-relaxed">
            Our event management team plans and executes world-class technical events, workshops, and competitions that inspire innovation and foster learning.
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
            To create transformative experiences that bring together technology enthusiasts, industry experts, and innovators.
            We believe that great events don't just happen—they're meticulously planned, passionately executed, and leave lasting impressions on our community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
