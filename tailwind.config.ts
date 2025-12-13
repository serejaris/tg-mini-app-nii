import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nii-bg': '#F5EDE9',
        'nii-cream': '#EFEEE9',
        'nii-white': '#FFFFFF',
        'nii-text': '#29340C',
        'nii-accent': '#29340C',
        'nii-yellow': '#F1DC73',
        'nii-border': '#29340C',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
      borderRadius: {
        'nii': '12px',
        'nii-lg': '20px',
      },
    },
  },
  plugins: [],
};
export default config;
