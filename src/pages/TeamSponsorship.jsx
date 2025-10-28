import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

export default function TeamSponsorship() {
  const teamMembers = [
    {
      name: "Rahul Kumar",
      role: "Sponsorship Lead",
      img: team1,
      bio: "Strategic partner who secures resources and builds valuable industry connections.",
      skills: ["Business Development", "Negotiation", "Networking"]
    },
    {
      name: "Mark Johnson",
      role: "Partnership Manager",
      img: team2,
      bio: "Partnership specialist who identifies and develops mutually beneficial relationships.",
      skills: ["Partnership Development", "Relationship Management", "Strategic Planning"]
    },
    {
      name: "Lucy Chen",
      role: "Sponsorship Coordinator",
      img: team3,
      bio: "Detail-oriented coordinator who manages sponsorship agreements and deliverables.",
      skills: ["Project Coordination", "Contract Management", "Communication"]
    },
    {
      name: "James Wilson",
      role: "Corporate Relations",
      img: team4,
      bio: "Corporate relations expert who maintains strong ties with industry partners.",
      skills: ["Corporate Relations", "Stakeholder Management", "Business Strategy"]
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
          <h1 className="text-6xl md:text-7xl font-bold font-[Orbitron] text-primary mb-6 tracking-wider">
            Sponsorship Team
          </h1>
          <p className="text-secondary text-lg md:text-xl font-[Exo_2] max-w-3xl mx-auto leading-relaxed">
            Our sponsorship team builds strategic partnerships and secures resources that enable ISTE MBCET to deliver exceptional programs and events.
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
            To create win-win partnerships that provide mutual value to ISTE MBCET and our sponsors.
            We believe that strong industry connections not only fund our initiatives but also create opportunities for collaboration, mentorship, and real-world learning experiences for our members.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
