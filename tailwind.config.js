/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "geist-sans": ["Geist", "sans-serif"], // Define your custom font family
      },
    },
  },
  plugins: [],
};
