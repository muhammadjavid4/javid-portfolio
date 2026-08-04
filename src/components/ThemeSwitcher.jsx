import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPalette, FaSun, FaMoon, FaCheck } from "react-icons/fa6";
import { useTheme, THEMES } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme, mode, toggleMode } = useTheme();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={panelRef} className="fixed bottom-6 right-5 md:right-8 z-[60] font-mono">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="glass-panel absolute bottom-16 right-0 w-64 rounded-lg border border-line/12 shadow-panel p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] tracking-wide text-paper-dim">// appearance</p>
              <button
                onClick={toggleMode}
                aria-label="Toggle light / dark mode"
                className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-sm border border-line/12 text-paper hover:border-amber hover:text-amber transition-colors"
              >
                {mode === "dark" ? <FaMoon /> : <FaSun />}
                {mode === "dark" ? "dark" : "light"}
              </button>
            </div>

            <p className="text-[11px] tracking-wide text-sage mb-2.5">// pick a theme</p>
            <div className="grid grid-cols-3 gap-2">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  aria-label={t.label}
                  title={t.label}
                  className={`
                    relative flex flex-col items-center gap-1.5 rounded-sm py-2.5 border transition-colors
                    ${theme === t.id ? "border-amber bg-ink-softer" : "border-line/10 hover:border-line/30"}
                  `}
                >
                  <span
                    className="w-5 h-5 rounded-full ring-1 ring-line/20 flex items-center justify-center"
                    style={{ backgroundColor: t.swatch }}
                  >
                    {theme === t.id && (
                      <FaCheck className="text-[9px]" style={{ color: "#14120F" }} />
                    )}
                  </span>
                  <span className="text-[9.5px] text-paper-dim leading-tight text-center">
                    {t.label.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open theme switcher"
        className="w-12 h-12 rounded-full bg-amber text-ink shadow-glow flex items-center justify-center text-lg"
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <FaPalette />
        </motion.span>
      </motion.button>
    </div>
  );
}
