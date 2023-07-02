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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ['Outfit', 'sans-serif']
      },
      colors: {
        'darkTeal': '#115e59',
        'hoverTeal': '#2dd4bf',
        'displayTeal': '#14b8a6',
        'whiteText': '#fafafa'
      }
    },
  },
  plugins: [require("daisyui")],
};
