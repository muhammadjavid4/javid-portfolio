import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const links = [
  { icon: <FaGithub />, link: "https://github.com/muhammadjavid4", label: "GitHub" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/muhammad-javid-pasha-b524881b6/", label: "LinkedIn" },
  { icon: <FaXTwitter />, link: "https://x.com/gadget_bhayya_0", label: "X" },
  { icon: <FaInstagram />, link: "https://instagram.com/javeed_salafi", label: "Instagram" },
  { icon: <SiLeetcode />, link: "https://leetcode.com/u/muhammad_javid_pasha/", label: "LeetCode" },
  { icon: <FaEnvelope />, link: "mailto:muhammadjavid622@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-soft border-t border-line/10 font-mono">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-xl text-paper">Muhammad Javid Pasha</h3>
          <p className="mt-3 text-sm text-paper-dim leading-relaxed">
            MERN Stack &amp; Java Developer, building scalable full-stack
            applications one commit at a time.
          </p>
        </div>

        <div>
          <p className="text-xs text-sage tracking-wide mb-4">// navigate</p>
          <ul className="space-y-2 text-sm text-paper-dim">
            <li><a href="#home" className="hover:text-amber transition-colors">home.jsx</a></li>
            <li><a href="#about" className="hover:text-amber transition-colors">about.md</a></li>
            <li><a href="#skills" className="hover:text-amber transition-colors">skills.json</a></li>
            <li><a href="#projects" className="hover:text-amber transition-colors">projects/</a></li>
            <li><a href="#contact" className="hover:text-amber transition-colors">contact.sh</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs text-sage tracking-wide mb-4">// connect</p>
          <div className="flex flex-wrap gap-4 text-lg text-paper-dim">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.link}
                target={l.link.startsWith("mailto") ? "_self" : "_blank"}
                rel="noreferrer"
                aria-label={l.label}
                className="hover:text-amber transition-colors"
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line/10 py-5 text-center text-xs text-paper-dim">
        © {new Date().getFullYear()} Muhammad Javid Pasha. All rights reserved.
      </div>
    </footer>
  );
}
