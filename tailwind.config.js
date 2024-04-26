/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      backgroundImage: {
        "home-page": "url('./images/home.jpg')",
        "resume-img": "url('./images/resume.jpg')",
      },
    },
  },
  plugins: [],
};
