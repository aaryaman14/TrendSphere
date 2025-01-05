module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fontFamily: {
          inter: ["Inter", "sans-serif"],
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-down": "slideDown 0.5s ease-out",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
