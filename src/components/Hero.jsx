import { motion } from "framer-motion";
import img1 from "../assets/profile1.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800
        relative overflow-hidden
      "
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl w-full px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-white"
        >
          <h2 className="text-5xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span
              className="
                bg-gradient-to-r from-sky-400 to-cyan-300
                bg-clip-text text-transparent
                drop-shadow-[0_0_15px_rgba(56,189,248,0.25)]
              "
            >
              Muhammad Javid Pasha
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-xl text-gray-300"
          >
            MERN Stack Developer & Java Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-4 text-gray-400 max-w-xl leading-relaxed"
          >
            I build scalable, secure and high-performance web applications
            using modern technologies like React, Node.js, MongoDB, MySQL
            and Java-based backend systems.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-7 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-sky-500 to-cyan-400
                text-black shadow-lg shadow-sky-500/20
              "
            >
              View Projects
            </motion.a>

            <motion.a
              href="/MuhammadJavidPashaResume.pdf"
              download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-7 py-3 rounded-xl font-semibold
                border border-sky-400 text-sky-400
                hover:bg-sky-400 hover:text-black
                transition shadow-lg shadow-sky-400/10
              "
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE WITH ROTATING LIGHT RING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="relative w-[340px] h-[340px] flex items-center justify-center">

            {/* ROTATING LIGHT RING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
              className="
                absolute inset-0 rounded-full
                bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400
                opacity-70 blur-[2px]
              "
            />

            {/* IMAGE CONTAINER */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="
                relative z-10 p-2 rounded-full
                bg-slate-900
                shadow-2xl shadow-sky-500/30
              "
            >
              <motion.img
                src={img1}
                alt="Javid profile"
                className="
                  w-80 h-80 object-cover rounded-full
                  bg-slate-900
                "
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 180 }}
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
