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

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative py-28 bg-slate-950 text-white overflow-hidden"
        >
            {/* BACKGROUND GLOW */}
            <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-sky-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-40 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto px-8">
                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-extrabold text-sky-400">
                        Skills
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Technologies, tools and programming languages I work with to build
                        modern, scalable and high-quality applications.
                    </p>
                </motion.div>

                {/* SKILLS GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {/* FRONTEND */}
                    <SkillCard title="Frontend Development">
                        <Skill icon={<FaHtml5 />} name="HTML5" />
                        <Skill icon={<FaCss3Alt />} name="CSS3" />
                        <Skill icon={<FaJs />} name="JavaScript" />
                        <Skill icon={<FaBootstrap />} name="Bootstrap" />
                        <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
                        <Skill icon={<FaReact />} name="React.js" />
                        <Skill icon={<SiNextdotjs />} name="Next.js" />
                    </SkillCard>

                    {/* BACKEND */}
                    <SkillCard title="Backend Development">
                        <Skill icon={<FaNodeJs />} name="Node.js" />
                        <Skill icon={<SiExpress />} name="Express.js" />
                        <Skill icon={<FaJava />} name="Java" />
                        <Skill icon={<SiSpringboot />} name="Spring Boot" />
                        <Skill icon={<FaDatabase />} name="REST APIs" />
                        <Skill icon={<FaDatabase />} name="API Integration" />
                    </SkillCard>

                    {/* DATABASES */}
                    <SkillCard title="Databases">
                        <Skill icon={<SiOracle />} name="Oracle" />
                        <Skill icon={<SiMysql />} name="MySQL" />
                        <Skill icon={<SiMongodb />} name="MongoDB" />
                    </SkillCard>

                    {/* PROGRAMMING LANGUAGES */}
                    <SkillCard title="Programming Languages">
                        <Skill icon={<FaJava />} name="Java" />
                        <Skill icon={<FaPython />} name="Python" />
                        <Skill icon={<FaJs />} name="JavaScript" />
                        <Skill icon={<FaDatabase />} name="C" />
                        <Skill icon={<FaDatabase />} name="C++" />
                    </SkillCard>

                    {/* TOOLS */}
                    <SkillCard title="Tools & Platforms">
                        <Skill icon={<FaGitAlt />} name="Git" />
                        <Skill icon={<FaGithub />} name="GitHub" />
                        <Skill icon={<SiPostman />} name="Postman" />
                        <Skill icon={<FaDatabase />} name="API Testing" />
                    </SkillCard>
                    {/* DATA STRUCTURES & ALGORITHMS */}
                    <SkillCard title="Data Structures & Algorithms">
                        <Skill icon={<FaCode />} name="C++ (DSA)" />
                        <Skill icon={<FaCode />} name="130+ LeetCode Problems Solved" />
                        <Skill icon={<FaCode />} name="Arrays, Strings, Recursion" />
                        <Skill icon={<FaCode />} name="Linked List, Stack, Queue" />
                        <Skill icon={<FaCode />} name="Trees, Graphs, Hashing" />
                    </SkillCard>
                    <SkillCard title="Operating Systems">
                        <Skill icon={<FaWindows />} name="Windows" />
                        <Skill icon={<FaLinux />} name="Linux" />
                        <Skill icon={<FaApple />} name="macOS" />
                    </SkillCard>
                </motion.div>
            </div>
        </section>
    );
}

/* ---------- SKILL CARD ---------- */
function SkillCard({ title, children }) {
    return (
        <motion.div
            variants={item}
            className="
        bg-slate-900/80 backdrop-blur-lg
        border border-white/10
        rounded-2xl p-6
        hover:border-sky-400/40
        transition
      "
        >
            <h3 className="text-xl font-bold text-sky-400 mb-6">
                {title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {children}
            </div>
        </motion.div>
    );
}

/* ---------- SINGLE SKILL ---------- */
function Skill({ icon, name }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-gray-300"
        >
            <span className="text-sky-400 text-xl">
                {icon}
            </span>
            <span>{name}</span>
        </motion.div>
    );
}
