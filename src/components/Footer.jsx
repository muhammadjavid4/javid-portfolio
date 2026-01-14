import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaXTwitter,
    FaEnvelope,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si"; // ✅ CORRECT


export default function Footer() {
    return (
        <footer className="relative bg-slate-950 text-gray-400 overflow-hidden">
            {/* TOP DIVIDER */}
            <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-10">
                {/* BRAND */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-extrabold text-sky-400">
                        Muhammad Javid Pasha
                    </h3>
                    <p className="mt-3 text-gray-400">
                        MERN Stack Developer & Java Developer passionate about building
                        scalable, modern web applications.
                    </p>
                </motion.div>

                {/* QUICK LINKS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="text-lg font-bold text-sky-400 mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-sky-400 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-sky-400 transition">About</a></li>
                        <li><a href="#skills" className="hover:text-sky-400 transition">Skills</a></li>
                        <li><a href="#projects" className="hover:text-sky-400 transition">Projects</a></li>
                        <li><a href="#contact" className="hover:text-sky-400 transition">Contact</a></li>
                    </ul>
                </motion.div>

                {/* CONNECT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h4 className="text-lg font-bold text-sky-400 mb-4">
                        Connect With Me
                    </h4>

                    <div className="flex gap-4 text-xl">
                        <SocialIcon
                            icon={<FaGithub />}
                            link="https://github.com/muhammadjavid4"
                            label="GitHub"
                        />
                        <SocialIcon
                            icon={<FaLinkedin />}
                            link="https://linkedin.com/in/muhammad-javid-pasha-b524881b6/"
                            label="LinkedIn"
                        />
                        <SocialIcon
                            icon={<FaXTwitter />}
                            link="https://x.com/gadget_bhayya_0"
                            label="X"
                        />
                        <SocialIcon
                            icon={<FaInstagram />}
                            link="https://instagram.com/javeed_salafi"
                            label="Instagram"
                        />
                        <SocialIcon
                            icon={<FaEnvelope />}
                            link="mailto:muhammadjavid622@gmail.com"
                            label="Email"
                        />
                        <SocialIcon
                            icon={<SiLeetcode />}
                            label="LeetCode"
                            link="https://leetcode.com/u/muhammad_javid_pasha/"
                        />
                    </div>
                </motion.div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/10 py-6 text-center text-sm">
                © {new Date().getFullYear()} Muhammad Javid Pasha. All rights reserved.
            </div>
        </footer>
    );
}

/* ---------- SOCIAL ICON ---------- */
function SocialIcon({ icon, link, label }) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4, scale: 1.15 }}
            className="relative text-gray-400 hover:text-sky-400 transition"
        >
            {icon}
            <span className="
        absolute -top-7 left-1/2 -translate-x-1/2
        text-xs px-2 py-1 rounded-md
        bg-black text-white
        opacity-0 group-hover:opacity-100
      ">
                {label}
            </span>
        </motion.a>
    );
}
