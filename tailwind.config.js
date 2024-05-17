// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'fcol': '#ffffff',
        'fontcol': '#0a64f7',
        'headfont': '#3b82f6'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

