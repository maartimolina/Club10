/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#111E38',      // Fondo oscuro elegante
        cream: '#FDFBF7',     // Fondo claro cálido
        pinkAccent: '#EC5D96', // Rosa
        blueAccent: '#40A0DB', // Celeste
        orangeAccent: '#F26F38', // Naranja
        greenAccent: '#68BD68', // Verde
      },
    },
  },
  plugins: [],
}