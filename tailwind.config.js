/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "black-form":
          "0px -4px 6px rgba(255, 255, 255, 0.5), 0px 4px 6px rgba(255, 255, 255, 0.5)", // Adjust values as needed
      },
    },
  },
  plugins: [require("daisyui")],
};
