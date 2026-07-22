import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: "#F3F7F8",
        ink: "#06333B",
        petrol: "#0A4A54",
        teal: "#0C7A87",
        aqua: "#21C7C0",
        mint: "#5FE3D6",
        champagne: "#BFA06A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(6,51,59,0.28)",
        card: "0 18px 44px -22px rgba(6,51,59,0.20)",
        glow: "0 0 0 1px rgba(255,255,255,0.6), 0 30px 70px -30px rgba(12,122,135,0.45)",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
