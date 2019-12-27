const merge = require( 'webpack-merge' );
const commonConfig = require( './webpack.config.common.js' );

const config = merge( commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      /*
       * Styles rule
       * */
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            }
          },
          'sass-loader',

        ]
      },

    ]
  }
} );

module.exports = config;
