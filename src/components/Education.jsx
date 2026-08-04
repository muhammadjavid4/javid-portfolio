import { motion } from "framer-motion";
import { SectionHeading } from "./About";

const educationData = [
  {
    hash: "a1c92f0",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Basar",
    duration: "2021 – 2025",
    grade: "6.7 CGPA",
    details: [
      "Strong foundation in Data Structures, Algorithms & DBMS",
      "Hands-on experience with full-stack development",
      "Built multiple academic & personal projects",
    ],
  },
  {
    hash: "7e2b41d",
    degree: "Pre-University Course (PUC)",
    institution: "RGUKT Basar",
    duration: "2018 – 2020",
    grade: "8.6 CGPA",
    details: [
      "Mathematics, Physics & Chemistry",
      "Developed strong analytical and problem-solving skills",
    ],
  },
  {
    hash: "0f56ab9",
    degree: "Secondary School Certificate (SSC)",
    institution: "ZPHS Enubamula, Telangana",
    duration: "2018",
    grade: "9.7 CGPA",
    details: [
      "Strong fundamentals in Mathematics & Science",
      "Consistent academic performance",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-28 bg-ink-soft">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="02 / education"
          title="git log --academics"
          description="A chronological log of the milestones that built my technical foundation."
        />

        <div className="border border-line/10 bg-ink">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-line/10 font-mono text-xs text-paper-dim">
            <span className="w-2 h-2 rounded-full bg-amber" />
            education.log
          </div>

          <div>
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.hash}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`px-5 md:px-8 py-7 ${
                  i !== educationData.length - 1 ? "border-b border-line/10" : ""
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-3 font-mono text-sm">
                  <span className="text-amber">commit {edu.hash}</span>
                  <span className="text-paper-dim">— {edu.duration}</span>
                </div>

                <h3 className="mt-3 font-display text-2xl text-paper">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-paper-dim">{edu.institution}</p>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
                  <span className="text-sage">grade: {edu.grade}</span>
                </div>

                <ul className="mt-4 space-y-1.5">
                  {edu.details.map((point, j) => (
                    <li key={j} className="flex gap-2 text-paper-dim text-sm">
                      <span className="text-sage font-mono">+</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
