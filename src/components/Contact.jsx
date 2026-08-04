import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { SectionHeading } from "./About";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-ink overflow-hidden">
      <div className="ambient-blob w-96 h-96 bg-amber top-0 -right-32 animate-float-slow" />
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="05 / contact"
          title="contact.sh"
          description="Open to opportunities, collaborations, or just a good tech conversation."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-line/10 bg-ink-soft"
          >
            <div className="flex items-center gap-2 px-5 py-3 border-b border-line/10 font-mono text-xs text-paper-dim">
              <span className="w-2 h-2 rounded-full bg-sage" />
              $ whoami --contact
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <ContactItem
                icon={<FaEnvelope />}
                label="email"
                value="muhammadjavid622@gmail.com"
                link="mailto:muhammadjavid622@gmail.com"
              />
              <ContactItem
                icon={<FaPhone />}
                label="phone"
                value="+91 86880 09892"
                link="tel:+918688009892"
              />
            </div>
          </motion.div>

          {/* RIGHT: SOCIALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-line/10 bg-ink-soft"
          >
            <div className="flex items-center gap-2 px-5 py-3 border-b border-line/10 font-mono text-xs text-paper-dim">
              <span className="w-2 h-2 rounded-full bg-amber" />
              $ ls socials/
            </div>

            <div className="p-6 md:p-8 grid grid-cols-2 gap-3">
              <SocialLink icon={<FaLinkedin />} label="LinkedIn" link="https://linkedin.com/in/muhammad-javid-pasha-b524881b6/" />
              <SocialLink icon={<FaGithub />} label="GitHub" link="https://github.com/muhammadjavid4" />
              <SocialLink icon={<FaXTwitter />} label="X (Twitter)" link="https://x.com/gadget_bhayya_0" />
              <SocialLink icon={<FaInstagram />} label="Instagram" link="https://instagram.com/javeed_salafi" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, link }) {
  return (
    <a href={link} className="flex items-center gap-4 group">
      <span className="text-amber text-lg shrink-0">{icon}</span>
      <div>
        <p className="font-mono text-xs text-paper-dim">{label}</p>
        <p className="text-paper group-hover:text-amber transition-colors">{value}</p>
      </div>
    </a>
  );
}

function SocialLink({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 px-4 py-3 border border-line/10 text-paper-dim hover:border-amber hover:text-amber transition-colors"
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  );
}
