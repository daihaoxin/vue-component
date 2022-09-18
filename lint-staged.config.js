module.exports = {
  "*.ts?x": ["tsc -p tsconfig.json --noEmit"],
  "**/*": ["pnpm run lint:prettier:fix", "pnpm run lint:eslint:fix"],
};
