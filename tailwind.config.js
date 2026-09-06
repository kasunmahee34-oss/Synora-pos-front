import preset from '../../shared-theme/tailwind-preset.js';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Local overrides can go here; core tokens come from the shared preset.
    extend: {},
  },
  plugins: [],
};
