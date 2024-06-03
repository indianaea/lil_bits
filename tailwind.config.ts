import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'yelloww': '#e3e996',
        'red': '#cf6757',
        'green': '#3e5f54',
        'lapisblue': '#2A628F',
      },
    },
  },
  plugins: [],
};
export default config;
