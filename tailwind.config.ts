import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // THIS IS IMPORTANT
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
