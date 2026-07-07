import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        raspberry: "#E84D84",
        powder: "#F7DDE4",
        blush: "#FFF4F6",
        gold: "#D8B36A",
        ink: "#2F2F2F",
        mist: "#EFEFEF",
        wine: "#9B1F3D"
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(155, 31, 61, 0.12)"
      },
      borderRadius: {
        card: "20px"
      }
    }
  },
  plugins: []
};

export default config;
