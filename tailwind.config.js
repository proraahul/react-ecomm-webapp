/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-green': '#3bb77e',
        'faded-black' : 'rgba(0,0,0,0.7)',
        'light-black' : '#7E7E7E',
        
      },
      spacing:{
        110: '400px',
      }
    },
  },
  plugins: [],
}

