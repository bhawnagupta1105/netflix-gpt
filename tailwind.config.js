/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  parserOptions: {
    ecmaVersion: 2021, // or whichever ECMAScript version your project uses
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
    },
},
  plugins: ['react', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  rules: {
    // Add any additional rules or overrides as needed
},
}

