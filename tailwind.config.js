// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'vedanta-blue': '#2b5b84',
//         'vedanta-peach': '#fbdca6',
//         'vedanta-orange': '#cf6e28',
//         'vedanta-brown': '#7a3e3e',
//       },
//       fontFamily: {
//         'cursive': ['"Dancing Script"', 'cursive'], 
//         'sans': ['Arial', 'Helvetica', 'sans-serif'],
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vedanta-blue': '#2b5b84',
        'vedanta-peach': '#fbdca6',
        'vedanta-orange': '#cf6e28',
        'vedanta-brown': '#7a3e3e',
      },
      fontFamily: {
        'cursive': ['"Dancing Script"', 'cursive'], 
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}