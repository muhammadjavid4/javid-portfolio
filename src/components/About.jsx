import { motion } from "framer-motion";
import img2 from "../assets/profile2.jpeg";
import {
  FaBook,
  FaLaptopCode,
  FaYoutube,
  FaPenNib,
  FaMobileScreen,
} from "react-icons/fa6";

const hobbies = [
  { icon: <FaBook />, label: "Reading books" },
  { icon: <FaLaptopCode />, label: "Learning new technologies" },
  { icon: <FaYoutube />, label: "Creating YouTube videos" },
  { icon: <FaPenNib />, label: "Video editing & content creation" },
  { icon: <FaMobileScreen />, label: "Exploring new gadgets" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="01 / about" title="Who I am" />

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-line/10 bg-ink-soft p-3">
              <img
                src={img2}
                alt="Muhammad Javid Pasha"
                className="w-full h-96 object-cover grayscale-[15%] contrast-[1.05]"
              />
              <div className="flex items-center justify-between mt-3 font-mono text-[11px] text-paper-dim">
                <span>about.jpg</span>
                <span>RGUKT Basar, IN</span>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="border border-line/10 bg-ink-soft">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-line/10 font-mono text-xs text-paper-dim">
                <span className="w-2 h-2 rounded-full bg-sage" />
                about.md
              </div>
              <div className="p-6 md:p-8">
                <p className="text-paper text-lg leading-relaxed">
                  I'm a <span className="text-amber font-medium">2025 CSE graduate</span>{" "}
                  and full-stack developer who enjoys the whole path from a
                  database schema to the pixel that shows it on screen. I like
                  understanding how things work underneath, not just getting
                  them to work.
                </p>
                <p className="mt-5 text-paper-dim leading-relaxed">
                  As a fresher, I bring a strong learning mindset and a habit
                  built from solving 130+ DSA problems: break the problem down
                  before writing a single line of code. I'm comfortable
                  picking up new stacks quickly and enjoy shipping projects
                  end-to-end — frontend, backend, and the database in
                  between.
                </p>

                <div className="mt-9">
                  <p className="font-mono text-xs text-sage tracking-wide mb-4">
                    // beyond the code
                  </p>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                    {hobbies.map((h) => (
                      <div key={h.label} className="flex items-center gap-3 text-paper-dim">
                        <span className="text-amber">{h.icon}</span>
                        <span className="text-sm">{h.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <p className="font-mono text-xs text-sage tracking-wide mb-3">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-5xl text-paper">{title}</h2>
      {description && (
        <p className="mt-4 text-paper-dim max-w-xl">{description}</p>
      )}
    </motion.div>
  );
}
