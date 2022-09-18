const { NODE_ENV } = process.env;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: NODE_ENV === 'test' ? 'auto' : false,
        targets: {
          node: 'current',
        },
      },
    ],
    /* "@babel/preset-react", */
    '@babel/preset-typescript',
  ],
  plugins: ['@vue/babel-plugin-jsx'],
  exclude: [/node_moduels/],
};
