module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
