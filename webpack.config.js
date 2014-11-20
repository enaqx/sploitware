/**
 * Webpack config
 */

module.exports = {
  entry: './public/js/app.js',

  output: {
    path: './public/js/',
    filename: 'bundle.js'       
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, 
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml" }
    ]
  },
  
  resolve: {
    extensions: ['', '.js', '.json'] 
  },
};