/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
        'alt-sans': ['"Source Sans 3"', 'sans-serif'],
        'alt-serif': ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bakery: {
          "primary": "#2F4F4F",          // Deep Forest Green
          "primary-content": "#FBF7F0",  // Linen White text on primary
          "secondary": "#A3B18A",        // Sage Green
          "secondary-content": "#2F4F4F",
          "accent": "#C1785F",           // Terracotta Warm
          "accent-content": "#FBF7F0",
          "neutral": "#646464",          // Stone Grey
          "neutral-content": "#FBF7F0",
          "base-100": "#FBF7F0",         // Linen White
          "base-200": "#EFE9E1",         // Slightly darker linen (custom mix)
          "base-300": "#E3DCCF",         // Even darker linen
          "base-content": "#2F4F4F",     // Deep Forest Green for text
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "light",
      "dark"
    ],
  },
}