/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-brown': '#4b2e2b',
        'saddle-tan': '#c08a65',
        'charcoal': '#1e1e1e',
        'bone': '#f7f3ee',
        'moss': '#647060',
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'sans': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'leather-texture': "url('/images/brand/leather-texture.jpg')",
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}