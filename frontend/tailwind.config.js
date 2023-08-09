// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       backgroundColor:{
//         "app-green":"#10EB37",
//       },
//       fontFamily:{
//         "poppins":["Poppins", "sans-serif"],
//       },
//       height: {
//         "1/10": "10%",
//         "9/10": "90%",
//       },
//       backgroundColor: {
//         "app-black": "#121212",
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "app-green": "#10EB37",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
      backgroundColor: {
        "app-black": "#121212",
      },
      // Custom scrollbar styles
      scrollbar: {
        width: "8px",
        track: "transparent",
        thumb: "bg-gray-700",
        thumbHover: "bg-gray-500",
        thumbDark: "bg-white",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // Custom scrollbar plugin
    require("tailwind-scrollbar"),
  ],
};



