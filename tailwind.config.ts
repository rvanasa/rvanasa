import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#070b14",
        surface: "#0e1524",
        accent: "#5eead4",
      },
      boxShadow: {
        soft: "0 20px 50px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
