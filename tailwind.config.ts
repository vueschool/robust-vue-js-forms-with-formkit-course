// tailwind.config.js for Nuxt users
const formKitTailwind = require("@formkit/themes/tailwindcss");

export default {
  // add the formkit.config.js file
  content: ["./src/**/*.{html,vue,js}", "./formkit.config.ts"],
  plugins: [formKitTailwind],
};
