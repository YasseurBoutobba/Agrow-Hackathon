/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#62C370',
        navbg: '#F5F5F5',
        nightblue: "hsla(214, 84%, 15%, 1)",
        postbg: '#F6F7F9',
        lightgrey:'#696969',
        lightgreen: '#E6F0E8',
        beige: '#D7DCD9',
        bluegrey: '#808006',
        cred: "#FA3131",
        fadegreen: "#F5FCF3", 
        callgreen:"#1A8200"

      }
    },
  },
  plugins: [],
}