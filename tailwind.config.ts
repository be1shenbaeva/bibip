import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      fontWeight: {
        "600": "600",
      },
      backgroundImage: {
        "hero-bg": "url('/hero-bg.jpg')",
        "car-bg": "url('/car-bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      background: {
        gradient:
          "linear-gradient(268deg, #20DDB7 -4.4%, #22BB9C 107.33%), #21D6B1",
      },
      screens: {
        xsm: "532px",
      },
    },
  },
  plugins: [],
};
export default config;
