/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange-50': '#FFEFE6',
      'orange-100': '#FFCFB0',
      'orange-200': '#FFB78A',
      'orange-300': '#FF9654',
      'orange-400': '#FF8233',
      'orange-500': '#FF6300',
      'orange-600': '#E85A00',
      'orange-700': '#B54600',
      'orange-800': '#8C3600',
      'orange-900': '#6B2A00',
      'orange': '#FD6F00',
      'white-100': '#FFFFFF',
      'black-50': '#E6E6E6',
      'black-100': '#B0B0B0',
      'black-200': '#8A8A8A',
      'black-300': '#545454',
      'black-400': '#333333',
      'black-500': '#1E1E1E',
      'black-600': '#000000',
    },
    extend: {},
  },
  plugins: [],
}

