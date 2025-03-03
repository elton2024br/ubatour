/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dc3232',
          dark: '#be1e1e',
          light: '#ffebeb',
        },
        secondary: {
          DEFAULT: '#f5f5f5',
          dark: '#646464',
          light: '#fafafa',
        },
        accent: {
          DEFAULT: '#ffc800',
          dark: '#e6b400',
          light: '#fff5c8',
        },
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  // Configuração simplificada para o Tailwind 4
  // Permitir todos os plugins do core
  corePlugins: true,
  plugins: [],
} 