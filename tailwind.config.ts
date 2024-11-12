import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7CE48',
        'primary-700': '#FAD461',
        'primary-500': '#FCD976',
        'primary-400': '#FEDF8A',
        'primary-300': '#FFE49E',
        light: '#FAF6E9',
        'dark-gray': '#2A2826',
        'gray-500':'#242323',
        'dark-500':'#161616',
        dark: '#111111',
      },
    },
  },
  plugins: [],
} satisfies Config;
