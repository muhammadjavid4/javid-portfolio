import { createContext, useContext, useEffect, useState } from "react";

export const THEMES = [
  { id: "amber", label: "Terminal Amber", swatch: "#E8A33D" },
  { id: "ocean", label: "Ocean Blue", swatch: "#38A1E0" },
  { id: "violet", label: "Violet Nights", swatch: "#A879EB" },
  { id: "emerald", label: "Emerald Code", swatch: "#34C780" },
  { id: "crimson", label: "Crimson Editor", swatch: "#E05454" },
  { id: "mono", label: "Mono Pro", swatch: "#8AB4FF" },
];

const THEME_KEY = "jp-theme";
const MODE_KEY = "jp-mode";

const ThemeContext = createContext(null);

function getInitialTheme() {
  if (typeof window === "undefined") return "amber";
  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved && THEMES.some((t) => t.id === saved)) return saved;
  return "amber";
}

function getInitialMode() {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem(MODE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.classList.toggle("light", mode === "light");
    root.classList.toggle("dark", mode === "dark");
    window.localStorage.setItem(THEME_KEY, theme);
    window.localStorage.setItem(MODE_KEY, mode);
  }, [theme, mode]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
