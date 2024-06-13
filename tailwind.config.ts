import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        big: "1800px",
      },
    },
  },
  plugins: [],
} satisfies Config;
