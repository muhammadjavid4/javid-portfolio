import { motion } from "framer-motion";
import img2 from "../assets/profile2.jpeg";
import {
  FaBook,
  FaLaptopCode,
  FaYoutube,
  FaPenNib,
  FaMobileScreen,
} from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-sky-400">
            About Me
          </h2>
          <p className="mt-4 text-gray-400">
            A little introduction about who I am and what I love to do
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div
              className="
                relative p-2 rounded-2xl
                bg-gradient-to-tr from-sky-500 to-cyan-400
                shadow-xl shadow-sky-500/20
              "
            >
              <img
                src={img2}
                alt="About Javid"
                className="w-72 h-72 object-cover rounded-2xl bg-slate-900"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a{" "}
              <span className="text-sky-400 font-semibold">
                2025 graduate fresher
              </span>{" "}
              and a passionate{" "}
              <span className="text-sky-400 font-semibold">
                Full Stack Developer
              </span>
              . I genuinely enjoy building web applications and exploring how
              things work behind the scenes. I am always excited to learn new
              technologies, improve my skills, and apply my knowledge to
              real-world projects.
            </p>

            <p className="mt-5 text-gray-400 leading-relaxed">
              As a fresher, I bring a strong learning mindset, adaptability, and
              enthusiasm to work with modern tech stacks. I believe in
              continuous learning and enjoy experimenting with new tools,
              frameworks, and ideas that help me grow as a developer.
            </p>

            {/* HOBBIES */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-sky-400 mb-4">
                Hobbies & Interests
              </h3>

              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <FaBook className="text-sky-400" />
                  <span>Reading books</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaLaptopCode className="text-sky-400" />
                  <span>Learning new technologies</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaYoutube className="text-sky-400" />
                  <span>Creating YouTube videos</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPenNib className="text-sky-400" />
                  <span>Video editing & content creation</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMobileScreen className="text-sky-400" />
                  <span>Exploring new gadgets</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
