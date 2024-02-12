import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'var(--primary)',
        'primary-foreground':'var(--primary-foreground)',
        secondary:'var(--secondary)',
        'secondary-foreground':'var(--secondary-foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config

