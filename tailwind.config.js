/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
        "gradient-yellow": "linear-gradient(1deg, #E0C340 0.13%, #DFC23E 3.97%, #E1C441 7.2%, #E3C743 10.13%, #E4C542 12.98%, #E6C744 15.99%, #E7C845 19.52%, #E5C643 23.96%, #E6C945 30.43%, #E3C743 36.49%, #E9CA48 42.49%, #EDCE49 49.35%, #F0D44C 55.42%, #F4D84F 61.43%, #F6DA52 65.74%, #F7DB53 72.23%, #F9DD55 77.43%, #F9DF56 83.84%, #FAE157 91.52%, #F9DF56 97.87%)",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        rectangle: "url('./assets/Rectangle 2.png')",
        newArrivals: "url('./assets/Vector 8.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};