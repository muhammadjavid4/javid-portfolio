export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
          softer: "rgb(var(--ink-softer) / <alpha-value>)",
        },
        paper: {
          DEFAULT: "rgb(var(--paper) / <alpha-value>)",
          dim: "rgb(var(--paper-dim) / <alpha-value>)",
        },
        amber: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
        },
        sage: {
          DEFAULT: "rgb(var(--accent2) / <alpha-value>)",
          soft: "rgb(var(--accent2-soft) / <alpha-value>)",
        },
        rust: {
          DEFAULT: "rgb(var(--danger) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgb(var(--accent) / 0.35)",
        panel: "0 20px 60px -15px rgb(0 0 0 / 0.5)",
      },
    },
  },
  plugins: [],
};
