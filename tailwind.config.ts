import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        joystick: "url('@assets/photos/joystick.png')",
        unity: "url('@assets/photos/unity.png')",
        cryengine: "url('@assets/photos/cryengine.png')",
        unrealengine: "url('@assets/photos/unrealengine.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
