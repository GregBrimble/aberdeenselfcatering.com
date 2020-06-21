const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.css",
    "./properties/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/ui")],
  variants: {
    margin: ["first", "responsive"],
  },
}
