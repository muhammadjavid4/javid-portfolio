import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Basar",
    duration: "2021 – 2025",
    Grade: "6.7 CGPA",
    details: [
      "Strong foundation in Data Structures, Algorithms & DBMS",
      "Hands-on experience with Full Stack Development",
      "Built multiple academic & personal projects",
    ],
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "RGUKT Basar",
    duration: "2018 – 2020",
    Grade: "8.6 CGPA",
    details: [
      "Mathematics, Physics & Chemistry",
      "Developed strong analytical and problem-solving skills",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "ZPHS Enubamula, Telangana",
    duration: "2018",
    Grade: "9.7 CGPA",
    details: [
      "Strong fundamentals in Mathematics & Science",
      "Consistent academic performance",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold flex items-center justify-center gap-3">
            <FaGraduationCap className="text-sky-400" />
            Education
          </h2>
          <p className="mt-4 text-gray-400">
            My academic journey that built my technical foundation
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/20 pl-10 space-y-14">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* DOT */}
              <span className="absolute -left-[46px] top-1 w-5 h-5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/40" />

              {/* CARD */}
              <div className="
                bg-slate-900/80 backdrop-blur-lg
                border border-white/10
                rounded-2xl p-6
                hover:border-sky-400/40 transition
              ">
                <h3 className="text-xl font-bold text-sky-400">
                  {edu.degree}
                </h3>

                <p className="text-gray-300 mt-1">
                  {edu.institution}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {edu.duration}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Grade: {edu.Grade}
                </p>

                <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
                  {edu.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
