import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative py-28 bg-slate-950 text-white overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-sky-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-sky-400">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I’m always open to discussing new opportunities, collaborations,
            or just having a tech conversation.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-slate-900/80 backdrop-blur-lg
              border border-white/10
              rounded-2xl p-8
            "
          >
            <h3 className="text-xl font-bold text-sky-400 mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-300">
              <ContactItem
                icon={<FaEnvelope />}
                label="Email"
                value="muhammadjavid622@gmail.com"
                link="mailto:muhammadjavid622@gmail.com"
              />

              <ContactItem
                icon={<FaPhone />}
                label="Phone"
                value="+91 8688009892"
                link="tel:+918688009892"
              />
            </div>
          </motion.div>

          {/* RIGHT: SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-slate-900/80 backdrop-blur-lg
              border border-white/10
              rounded-2xl p-8
            "
          >
            <h3 className="text-xl font-bold text-sky-400 mb-6">
              Connect With Me
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <SocialLink
                icon={<FaLinkedin />}
                label="LinkedIn"
                link="https://linkedin.com/in/muhammad-javid-pasha-b524881b6/"
              />
              <SocialLink
                icon={<FaGithub />}
                label="GitHub"
                link="https://github.com/muhammadjavid4"
              />
              <SocialLink
                icon={<FaXTwitter />}
                label="X (Twitter)"
                link="https://x.com/gadget_bhayya_0"
              />
              <SocialLink
                icon={<FaInstagram />}
                label="Instagram"
                link="https://instagram.com/javeed_salafi"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ITEM ---------- */
function ContactItem({ icon, label, value, link }) {
  return (
    <motion.a
      href={link}
      whileHover={{ x: 6 }}
      className="flex items-center gap-4 group"
    >
      <span className="text-sky-400 text-xl">
        {icon}
      </span>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="group-hover:text-sky-400 transition">
          {value}
        </p>
      </div>
    </motion.a>
  );
}

/* ---------- SOCIAL LINK ---------- */
function SocialLink({ icon, label, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.08 }}
      className="
        flex items-center gap-3
        px-4 py-3 rounded-xl
        bg-slate-800 hover:bg-slate-700
        text-gray-300 hover:text-sky-400
        transition
      "
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </motion.a>
  );
}
