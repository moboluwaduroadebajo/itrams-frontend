import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        domine: ["var(--font-domine)"],
        inter: ["var(--font-inter)"],
        mulish: ["var(--font-mulish)"],
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        vertical: "2px 0 #D5D5D5",
      },
    },
  },
  plugins: [],
};
export default config;

