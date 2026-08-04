import { motion } from "framer-motion";
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaWindows,
  FaLinux,
  FaApple,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiPostman,
} from "react-icons/si";
import { SectionHeading } from "./About";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const groups = [
  {
    key: "frontend",
    skills: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
    ],
  },
  {
    key: "backend",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <FaJava />, name: "Java" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <FaDatabase />, name: "REST APIs" },
      { icon: <FaDatabase />, name: "API Integration" },
    ],
  },
  {
    key: "databases",
    skills: [
      { icon: <SiOracle />, name: "Oracle" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },
  {
    key: "languages",
    skills: [
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaDatabase />, name: "C" },
      { icon: <FaDatabase />, name: "C++" },
    ],
  },
  {
    key: "tools",
    skills: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <FaDatabase />, name: "API Testing" },
    ],
  },
  {
    key: "dsa",
    skills: [
      { icon: <FaCode />, name: "C++ (DSA)" },
      { icon: <FaCode />, name: "130+ LeetCode problems" },
      { icon: <FaCode />, name: "Arrays, strings, recursion" },
      { icon: <FaCode />, name: "Linked list, stack, queue" },
      { icon: <FaCode />, name: "Trees, graphs, hashing" },
    ],
  },
  {
    key: "os",
    skills: [
      { icon: <FaWindows />, name: "Windows" },
      { icon: <FaLinux />, name: "Linux" },
      { icon: <FaApple />, name: "macOS" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="03 / skills"
          title="skills.json"
          description="Technologies, tools and languages I reach for when building something real."
        />

        <div className="border border-line/10 bg-ink-soft">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-line/10 font-mono text-xs text-paper-dim">
            <span className="w-2 h-2 rounded-full bg-sage" />
            skills.json
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-5 md:p-8 font-mono text-sm leading-relaxed overflow-x-auto"
          >
            <span className="text-paper-dim">{"{"}</span>
            {groups.map((g, gi) => (
              <motion.div variants={item} key={g.key} className="pl-5 md:pl-8 py-2">
                <span className="text-amber">"{g.key}"</span>
                <span className="text-paper-dim">: [</span>
                <div className="pl-5 md:pl-8">
                  {g.skills.map((s, i) => (
                    <div key={s.name} className="flex items-center gap-2.5 py-1 text-paper">
                      <span className="text-sage shrink-0">{s.icon}</span>
                      <span>
                        "{s.name}"
                        {i !== g.skills.length - 1 ? "," : ""}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-paper-dim">]{gi !== groups.length - 1 ? "," : ""}</span>
              </motion.div>
            ))}
            <span className="text-paper-dim">{"}"}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
