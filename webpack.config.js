module.exports = {
    // otras configuraciones...
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false
          }
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules\/@mediapipe/  // Excluye @mediapipe del source-map-loader
        }
      ]
    },
  };
  