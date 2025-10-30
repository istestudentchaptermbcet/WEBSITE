import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

export default function Execom() {
  const coreCommittee = [
    {
      name: "John Doe",
      role: "Chairperson",
      img: team1,
      bio: "Visionary leader guiding ISTE MBCET towards excellence in technology and innovation.",
      skills: ["Leadership", "Strategy", "Team Building"]
    },
    {
      name: "Jane Smith",
      role: "Vice Chairperson",
      img: team2,
      bio: "Dedicated to supporting chapter operations and fostering collaborative environments.",
      skills: ["Project Management", "Communication", "Organization"]
    },
    {
      name: "Mike Johnson",
      role: "Secretary",
      img: team3,
      bio: "Ensures smooth documentation and communication within the chapter.",
      skills: ["Documentation", "Communication", "Administrative"]
    },
    {
      name: "Sarah Wilson",
      role: "Treasurer",
      img: team4,
      bio: "Manages financial operations and ensures responsible resource allocation.",
      skills: ["Finance", "Budgeting", "Accounting"]
    }
  ];

  const teamLeads = [
    {
      teamName: "PR and Media",
      lead: {
        name: "Adhithya Mohan",
        role: "PR & Media Lead",
        img: team1,
        bio: "Passionate about digital storytelling and community building. Leads our social media presence and media outreach.",
        skills: ["Digital Marketing", "Content Creation", "Community Management"]
      },
      members: [
        { name: "Alex Chen", role: "Social Media Coordinator", img: team2 },
        { name: "Emma Davis", role: "Content Creator", img: team3 },
        { name: "Ryan Park", role: "Media Designer", img: team4 }
      ]
    },
    {
      teamName: "Event Management",
      lead: {
        name: "Sruthi",
        role: "Event Lead",
        img: team3,
        bio: "Dynamic organizer with a knack for creating memorable experiences and managing large-scale events.",
        skills: ["Event Planning", "Project Management", "Leadership"]
      },
      members: [
        { name: "Lisa Wong", role: "Event Coordinator", img: team1 },
        { name: "David Kim", role: "Logistics Manager", img: team2 },
        { name: "Maria Garcia", role: "Event Designer", img: team4 }
      ]
    },
    {
      teamName: "Content and Documentation",
      lead: {
        name: "Priya Sharma",
        role: "Content Lead",
        img: team2,
        bio: "Storyteller and educator who creates engaging content to inspire and educate our community.",
        skills: ["Technical Writing", "Education", "Communication"]
      },
      members: [
        { name: "Tom Anderson", role: "Technical Writer", img: team3 },
        { name: "Nina Patel", role: "Documentation Specialist", img: team1 },
        { name: "Chris Lee", role: "Content Strategist", img: team4 }
      ]
    },
    {
      teamName: "Design",
      lead: {
        name: "Sindhu",
        role: "Design Lead",
        img: team2,
        bio: "Creative visionary who brings imagination to life through design and innovative visual experiences.",
        skills: ["Graphic Design", "UI/UX", "Brand Strategy"]
      },
      members: [
        { name: "Sophie Brown", role: "UI Designer", img: team1 },
        { name: "Kevin Zhang", role: "Graphic Designer", img: team3 },
        { name: "Anna Taylor", role: "Brand Designer", img: team4 }
      ]
    },
    {
      teamName: "Sponsorship",
      lead: {
        name: "Rahul Kumar",
        role: "Sponsorship Lead",
        img: team1,
        bio: "Strategic partner who secures resources and builds valuable industry connections.",
        skills: ["Business Development", "Negotiation", "Networking"]
      },
      members: [
        { name: "Mark Johnson", role: "Partnership Manager", img: team2 },
        { name: "Lucy Chen", role: "Sponsorship Coordinator", img: team3 },
        { name: "James Wilson", role: "Corporate Relations", img: team4 }
      ]
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
            Executive Committee
          </h1>
          <p className="text-secondary text-lg md:text-xl font-[Exo_2] max-w-3xl mx-auto leading-relaxed">
            Meet the passionate leaders who drive innovation, organize events, and build our vibrant tech community at ISTE MBCET.
          </p>
        </motion.div>

        {/* Core Committee Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[Orbitron] text-primary text-center mb-12 tracking-wide">
            Core Committee
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCommittee.map((member, idx) => (
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
        </motion.div>

        {/* Team Leads Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[Orbitron] text-primary text-center mb-12 tracking-wide">
            Team Leads
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamLeads.map((team, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <TeamCard {...team.lead} isTeamLead={true} teamName={team.teamName} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center glass p-12 rounded-3xl mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[Orbitron] text-primary mb-6 tracking-wide">
            Our Vision
          </h2>
          <p className="text-secondary font-[Exo_2] text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            To create a dynamic environment where students can explore, innovate, and excel in technology.
            We believe in fostering leadership, creativity, and technical excellence through collaborative learning
            and real-world experiences that prepare our members for the future of technology.
          </p>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold font-[Audiowide] text-primary mb-6">
            Want to Join Our Team?
          </h3>
          <p className="text-secondary font-[Exo_2] text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference in our tech community.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(147, 51, 234, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-[Audiowide] font-bold text-xl rounded-2xl glow"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
