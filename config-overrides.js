const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.js$/,
    enforce: 'pre',
    use: ['source-map-loader'],
    exclude: [
      /@react-three\/drei/,
      /prop-types/,
      /react-reconciler/,
      /tunnel-rat/,
      /zustand/,
    ],
  })
);
