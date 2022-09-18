module.exports = {
  '*.ts?x': ['tsc -p tsconfig.json --noEmit'],
  '**/*.{js,jsx,ts,tsx,vue,html,css}': ['pnpm run lint:prettier:fix', 'git add'],
  '**/*.{js,jsx,ts,tsx,vue}': ['pnpm run lint:eslint:fix', 'git add'],
};
