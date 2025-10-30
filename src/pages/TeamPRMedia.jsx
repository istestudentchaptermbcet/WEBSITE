import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

export default function TeamPRMedia() {
  const teamMembers = [
    {
      name: "Adhithya Mohan",
      role: "PR & Media Lead",
      img: team1,
      bio: "Passionate about digital storytelling and community building. Leads our social media presence and media outreach.",
      skills: ["Digital Marketing", "Content Creation", "Community Management"]
    },
    {
      name: "Alex Chen",
      role: "Social Media Coordinator",
      img: team2,
      bio: "Social media enthusiast who creates engaging content and manages our online presence.",
      skills: ["Social Media Marketing", "Content Strategy", "Analytics"]
    },
    {
      name: "Emma Davis",
      role: "Content Creator",
      img: team3,
      bio: "Creative content creator who brings our stories to life through various media formats.",
      skills: ["Video Editing", "Photography", "Storytelling"]
    },
    {
      name: "Ryan Park",
      role: "Media Designer",
      img: team4,
      bio: "Graphic designer who creates visually stunning designs for our campaigns and events.",
      skills: ["Graphic Design", "Adobe Creative Suite", "Branding"]
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
            PR & Media Team
          </h1>
          <p className="text-secondary text-lg md:text-xl font-[Exo_2] max-w-3xl mx-auto leading-relaxed">
            Our creative team handles all aspects of public relations, social media management, and content creation to amplify ISTE MBCET's voice in the tech community.
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
            To create compelling narratives that showcase ISTE MBCET's innovation and impact.
            We strive to build a strong brand presence, engage our community, and inspire the next generation of tech leaders through strategic communication and creative storytelling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
