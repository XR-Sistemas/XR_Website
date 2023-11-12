/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/images/fundo_home.png')",
        about: "url('/images/fundo_about.png')",
        services: "url('/images/fundo_services.png')",
        projects: "url('/images/fundo_projects.png')",
      },
      colors: {
        primary: "#F30202",
        secondary: "#F40303",
      },
      fontFamily: {
        microTecni: ["var(--font-microTecni)"],
        helvetica: ["var(--font-helvetica)"],
      },
    },
  },
  plugins: [require("daisyui")],
};
