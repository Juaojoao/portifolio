/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "primary-light": "#666666"
      },
      maxHeight: {
        "card":'560px',
      },
      height: {
        "card":'480px',
        "card-lg": '380px',
        "card-md": '280px'
      },
      width: {
        "card": '370px',
        "card-lg": '280px',
        "card-md": '200px'
      }
    },
  },
  plugins: [],
}

