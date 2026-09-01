export default {
  // TypeScript/JavaScript files - full check + format + Tailwind class sorting
  '*.{ts,tsx,js,mjs,cjs}': [
    'biome check --write --no-errors-on-unmatched',
    // 'prettier --write --no-error-on-unmatched-pattern',
    'biome format --write --no-errors-on-unmatched',
  ],

  // JSON files - format only
  '*.json': ['biome format --write --no-errors-on-unmatched'],

  // TypeScript files - also run type check on changed files
  '*.{ts,tsx}': () => 'bun run typecheck',
};
