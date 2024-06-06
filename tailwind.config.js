/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "h-695": { raw: "(max-height: 695px)" },
      },
    },
    
  },
  plugins: [],
};
