/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      backgroundImage: {
        "home-page": "url('./assets/home.jpg')",
        "resume-img": "url('./assets/resume.jpg')",
      },
    },
  },
  plugins: [],
};
