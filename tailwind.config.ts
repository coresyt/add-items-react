import type { Config } from 'tailwindcss'
import the from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/*.tsx',
    './src/components/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...the.fontFamily.sans]
      }
    },
  },
  plugins: [],
} satisfies Config

