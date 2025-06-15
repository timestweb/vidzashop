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
          background: "#F1F1F1"
        },
        success: "#55CB0B",
        surface: {
          base: "#FFFFFF",
          icons: "#292D32",
          muted: "#0000001A",
          gray: "#F1F0F0",
          divider: '#E5E5E5',
          cod: '#1E1E1E1A'
        },
        text: {
          secondary: "#00000080",
        },
      },
      backgroundImage: {
        'logo': "url('/images/shared/vidza_logo_alt.png')", 
      },
    },
  },
  plugins: [],
};

export default config;