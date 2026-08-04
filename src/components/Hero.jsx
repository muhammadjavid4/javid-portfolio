import { motion } from "framer-motion";
import img1 from "../assets/profile1.jpeg";
import { FaArrowDown } from "react-icons/fa6";

const stack = ["React", "Node.js", "Express", "MongoDB", "MySQL", "Java", "Spring Boot"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-ink bg-grid-pattern bg-fade-vignette pt-28 pb-16 overflow-hidden"
    >
      {/* ambient accent glows — shift with the active theme automatically */}
      <div className="ambient-blob w-80 h-80 bg-amber -top-16 -left-10 animate-float-slow" />
      <div className="ambient-blob w-96 h-96 bg-sage top-1/3 -right-24 animate-float" />

      <div className="relative max-w-7xl w-full mx-auto px-6 md:px-10 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-sage tracking-wide"
          >
            // fresher · full-stack developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-paper break-words"
          >
            Muhammad Javid
            <br />
            <span className="italic text-amber">Pasha.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-7 max-w-lg text-paper-dim text-lg leading-relaxed"
          >
            I build full-stack web applications — from REST APIs and
            databases to the interfaces people actually touch. MERN on the
            frontend and backend, Java &amp; Spring Boot underneath, and a
            habit of solving problems the DSA way first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-2 font-mono text-xs"
          >
            {stack.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-sm border border-line/10 text-paper-dim"
              >
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-sm font-mono text-sm font-medium bg-amber text-ink hover:bg-amber-soft transition-colors shadow-glow"
            >
              view_projects()
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-sm font-mono text-sm font-medium border border-line/15 text-paper hover:border-amber hover:text-amber transition-colors"
            >
              get_in_touch()
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — dossier-style photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="justify-self-center md:justify-self-end"
        >
          <div className="relative w-72 md:w-80">
            {/* corner brackets, viewfinder style */}
            <Corner className="-top-3 -left-3 rotate-0" />
            <Corner className="-top-3 -right-3 rotate-90" />
            <Corner className="-bottom-3 -left-3 -rotate-90" />
            <Corner className="-bottom-3 -right-3 rotate-180" />

            <div className="border border-line/10 bg-ink-soft p-3">
              <img
                src={img1}
                alt="Muhammad Javid Pasha"
                className="w-full h-80 object-cover grayscale-[15%] contrast-[1.05]"
              />
              <div className="flex items-center justify-between mt-3 font-mono text-[11px] text-paper-dim">
                <span>profile.jpg</span>
                <span className="text-sage">● available</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 font-mono text-xs text-paper-dim hover:text-amber transition-colors"
      >
        scroll <FaArrowDown />
      </motion.a>
    </section>
  );
}

function Corner({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`absolute w-6 h-6 text-amber ${className}`}
      fill="none"
    >
      <path d="M2 10V2H10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
