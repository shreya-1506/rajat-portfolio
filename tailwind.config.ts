import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0a0a0a", coal: "#141414", bone: "#f1ede4", acid: "#d4ff3a", violet: "#8b5cf6", ember: "#ff5a1f" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], serif: ["var(--font-serif)", "serif"], mono: ["var(--font-mono)", "monospace"] },
    },
  },
  plugins: [],
};
export default config;
