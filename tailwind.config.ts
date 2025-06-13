// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#083B38",
        },
        success: "#55CB0B",
        surface: {
          base: "#ffffff",
          muted: "#0000001A",
          gray: "#F1F0F0"
        },
        text: {
          secondary: "#00000080",
        },
      },
    },
  },
  plugins: [],
};

export default config;
