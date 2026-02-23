// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headingAccent: "#800000", // dark maroon
        primaryText: "#1E293B",   // navy/dark slate
        secondaryText: "#475569", // muted navy gray
        blob1: "#8A2C2C",         // maroon for tags/blobs
        accent: "#1F3C88",        // deep navy for hover
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"]
      },
    },
  },
  plugins: [],
};