import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./package/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{

      maxWidth: {
        desktop: "1256px",
      },
      colors: {
        primary: "#B44DE6"
      },
    }
  },
  plugins: [],
};
export default config;
