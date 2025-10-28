import { motion } from "framer-motion";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

const team = [
  { name: "Adhithya Mohan", role: "PR & Media Lead", img: team1 },
  { name: "Sindhu Kiran", role: "Creative Director", img: team2 },
  { name: "Sruthi S", role: "Design Curator", img: team3 },
  { name: "Kiran Biju", role: "State Convention Co-ordinator", img: team4 },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
