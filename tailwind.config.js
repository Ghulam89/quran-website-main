/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ["smooth"],
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#002D42",
        secondary: "#FF7E00",
      },
      backgroundImage: {
        Assists: "url('/avatars/assists.png')",
        ChooseBG: "url('/avatars/choose_bg.png')",
        registerBG: "url('/avatars/register_bg.png')",
      },
    },
  },
  plugins: [],
};
