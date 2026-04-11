/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'agency': ['Agency FB', 'sans-serif'],
      },
      colors: {
        primary: '#ED7105',
        azulOscuro: '#197CAD',
        azulMedio: '#36A6D5',
        azulClaro: '#3BBBE6',
        secondary: '#DEA705',        
        grisOscuro: '#5C5E5D',
        grisMedio: '#B1B6B7',
        grisClaro: '#D8DDDD', 
        grisFondo: '#F5F5F5',
        verde: '#3BC0A0',
        rosa: '#C03BAB',
        morado: '#763BC0',
        
        rojo: '#F46060',
        verde: '#5CB85C',
        amarillo: '#F0C62F',

        whatsapp: '#5CB85C',
        telegram: '#0088cc',
        facebook: '#1877F2',
        linkedin: '#0A66C2',
        twitter: '#1DA1F2',
        instagram: '#E1306C',
      },
    },
  },
  plugins: [],

}