/** @type {import('tailwindcss').Config} */
import { colors } from './src/constants/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: colors.primaryMain,
          dark: colors.primaryDark,
          light: colors.primaryLight,
          lighter: colors.primaryLighter,
        },
        text: {
          primary: colors.textPrimary,
          secondary: colors.textSecondary,
          terciary: colors.textTerciary,
        },
      },
    },
  },
  plugins: [],
}
