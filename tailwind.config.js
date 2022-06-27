module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: [],
  theme: {
    extend: {
      colors: {
      mainColour: "rgba(250, 0, 0, 1)",
      bgColor: "rgba(128,128,128,1)",
      contColor: "rgba(250,250,0,1)",
      },
    },
  },
  plugins: [],
}
