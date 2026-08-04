import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaBars,
  FaXmark,
  FaEnvelope,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "home", file: "home.jsx" },
  { id: "about", file: "about.md" },
  { id: "education", file: "education.log" },
  { id: "skills", file: "skills.json" },
  { id: "projects", file: "projects/" },
  { id: "contact", file: "contact.sh" },
];

const socials = [
  { icon: <FaGithub />, label: "GitHub", link: "https://github.com/muhammadjavid4" },
  { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/muhammad-javid-pasha-b524881b6/" },
  { icon: <FaInstagram />, label: "Instagram", link: "https://instagram.com/javeed_salafi" },
  { icon: <FaXTwitter />, label: "X", link: "https://x.com/gadget_bhayya_0" },
  { icon: <FaEnvelope />, label: "Email", link: "mailto:muhammadjavid622@gmail.com" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  // Handles both desktop and mobile nav clicks. On mobile, the dropdown
  // has to fully collapse first — scrolling at the same time as that
  // collapse animation is what was causing "click karke navigate nahi
  // hora" (the browser's jump and the header's height animation were
  // fighting each other and cancelling out).
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const wasOpen = menuOpen;
    if (wasOpen) setMenuOpen(false);

    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const headerHeight = headerRef.current?.offsetHeight ?? 96;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
      window.scrollTo({ top, behavior: "smooth" });
    };

    if (wasOpen) {
      // wait for the mobile menu's collapse animation to finish
      setTimeout(scrollToSection, 320);
    } else {
      scrollToSection();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop - 140;
        const height = el.offsetHeight;
        if (current >= top && current < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`
        fixed top-0 w-full z-50 font-mono text-sm
        border-b transition-colors duration-300
        ${scrolled ? "border-line/10 bg-ink/90 backdrop-blur-md" : "border-transparent bg-ink/40"}
      `}
    >
      {/* traffic-light strip, like a window chrome */}
      <div className="max-w-7xl mx-auto flex items-center h-9 px-5 gap-2 border-b border-line/16">
        <span className="w-2.5 h-2.5 rounded-full bg-rust/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-sage/70" />
        <span className="ml-4 text-paper-dim/70 truncate">
          ~/muhammad-javid-pasha/portfolio
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-5">
        {/* DESKTOP TABS */}
        <nav className="hidden md:flex items-stretch">
          {sections.map(({ id, file }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`
                relative px-5 py-4 border-r border-line/16 whitespace-nowrap transition-colors
                ${active === id ? "text-amber bg-ink-soft" : "text-paper-dim hover:text-paper"}
              `}
            >
              {file}
              {active === id && (
                <motion.span
                  layoutId="nav-tab-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-amber"
                />
              )}
            </a>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden px-5 py-4 text-paper text-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        <div className="hidden md:flex items-center gap-5 pr-5 text-paper-dim">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.link}
              target={s.link.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={s.label}
              className="text-base hover:text-amber transition-colors"
            >
              {s.icon}
            </a>
          ))}
          <a
            href="/MuhammadJavidPashaResume.pdf"
            download
            className="ml-1 px-4 py-1.5 rounded-sm bg-amber text-ink font-semibold hover:bg-amber-soft transition-colors"
          >
            resume.pdf
          </a>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-y-auto max-h-[calc(100vh-5.5rem)] border-t border-line/10 bg-ink-soft"
          >
            {sections.map(({ id, file }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`block px-5 py-3 border-b border-line/16 ${
                  active === id ? "text-amber" : "text-paper-dim"
                }`}
              >
                {file}
              </a>
            ))}
            <div className="flex items-center gap-5 px-5 py-4 text-paper-dim">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target={s.link.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-lg hover:text-amber transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="/MuhammadJavidPashaResume.pdf"
              download
              className="block mx-5 mb-5 px-4 py-2 text-center rounded-sm bg-amber text-ink font-semibold"
            >
              resume.pdf
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
