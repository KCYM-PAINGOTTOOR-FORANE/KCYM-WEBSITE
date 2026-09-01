/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  // Only use Prettier for Tailwind class sorting
  // Biome handles all other formatting
  tailwindFunctions: ['cn', 'clsx', 'cva'],
  // Required for Tailwind v4 (CSS-based config)
  tailwindStylesheet: './src/app/globals.css',
};
