import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaBars,
  FaXmark,
  FaMoon,
  FaSun,
  FaEnvelope,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const sections = ["home", "about", "education", "skills", "projects", "contact"];

/* ANIMATION VARIANTS */
const linkVariants = {
  initial: { y: 0 },
  hover: { y: -2, color: "#38bdf8" },
};

const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.25, y: -3 },
};

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  /* 🌙 THEME TOGGLE */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  /* 📍 SCROLL + ACTIVE SECTION */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setShow(current < lastScroll || current < 80);
      setLastScroll(current);

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;
        const top = el.offsetTop - 120;
        const height = el.offsetHeight;
        if (current >= top && current < top + height) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="
            fixed top-0 w-full z-50
            bg-slate-900/70 dark:bg-black/60
            backdrop-blur-lg border-b border-white/10
          "
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}
            <motion.h1
  whileHover={{ scale: 1.05 }}
  className="
    text-2xl font-extrabold cursor-pointer mr-16
    bg-gradient-to-r from-sky-400 to-cyan-300
    bg-clip-text text-transparent
  "
>
  Muhammad Javid
</motion.h1>


            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8 text-white">
              {sections.map((sec) => (
                <motion.a
                  key={sec}
                  href={`#${sec}`}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`
                    relative capitalize font-medium
                    ${active === sec ? "text-sky-400" : "text-gray-300"}
                  `}
                >
                  {sec}
                  {active === sec && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-sky-400"
                    />
                  )}
                </motion.a>
              ))}

              <SocialIcons />

              {/* THEME TOGGLE */}
              <motion.button
                whileHover={{ rotate: 15, scale: 1.15 }}
                onClick={() => setDark(!dark)}
                className="text-xl"
              >
                {dark ? <FaSun /> : <FaMoon />}
              </motion.button>

              {/* RESUME */}
              <motion.a
                href="/MuhammadJavidPashaResume.pdf"
                download
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-5 py-2 rounded-xl font-semibold
                  bg-gradient-to-r from-sky-500 to-cyan-400
                  text-black shadow-lg
                "
              >
                Resume
              </motion.a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="md:hidden text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </motion.button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden bg-slate-900 px-6 pb-6"
              >
                {sections.map((sec) => (
                  <motion.a
                    key={sec}
                    href={`#${sec}`}
                    whileHover={{ x: 8 }}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block py-3 capitalize
                      ${active === sec ? "text-sky-400" : "text-white"}
                    `}
                  >
                    {sec}
                  </motion.a>
                ))}

                <div className="flex gap-6 mt-4 items-center">
                  <SocialIcons />
                  <motion.button
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    onClick={() => setDark(!dark)}
                  >
                    {dark ? <FaSun /> : <FaMoon />}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

/* 🌐 SOCIAL ICONS WITH TOOLTIP */
function SocialIcons() {
  const icons = [
    { icon: <FaGithub />, label: "GitHub", link: "https://github.com/muhammadjavid4" },
    { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/muhammad-javid-pasha-b524881b6/" },
    { icon: <FaInstagram />, label: "Instagram", link: "https://instagram.com/javeed_salafi" },
    { icon: <FaXTwitter />, label: "X (Twitter)", link: "https://x.com/gadget_bhayya_0" },
    { icon: <FaEnvelope />, label: "Email", link: "mailto:muhammadjavid622@gmail.com" },
  ];

  return icons.map((item, i) => (
    <motion.a
      key={i}
      href={item.link}
      target={item.link.startsWith("mailto") ? "_self" : "_blank"}
      rel="noreferrer"
      variants={iconVariants}
      initial="initial"
      whileHover="hover"
      className="group relative text-xl text-gray-300 hover:text-sky-400"
    >
      {item.icon}

      {/* TOOLTIP */}
      <span
        className="
          absolute -bottom-8 left-1/2 -translate-x-1/2
          whitespace-nowrap
          text-xs px-2 py-1 rounded-md
          bg-black text-white
          opacity-0 group-hover:opacity-100
          transition
        "
      >
        {item.label}
      </span>
    </motion.a>
  ));
}
