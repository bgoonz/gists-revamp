var path = require("path");
var assetPath = path.join(__dirname, ".", "public");

console.log(assetPath);

module.exports = {

  entry: [
    './client/index.js'
  ],
  output: {
    path: assetPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: path.join(__dirname, "..", "node_modules"),
      loader: 'babel'
    },
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer?browsers=last 3 versions', 'sass?outputStyle=expanded']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    //  {test: /\.(png|jpg)$/, include: path.join(__dirname, 'src'), loader: 'url-loader?limit=10000'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
};
