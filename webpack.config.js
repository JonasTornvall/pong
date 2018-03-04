
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src/main/js'),  
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'src/main/resources/static/built'),
    filename: './bundle.js',
    publicPath: '/built'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env', 'react']
          }
        }
      },
    {
        test: /\.(scss|sass)$/,
            use: [
                {
                    loader: 'style-loader', // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader', // compiles Sass to CSS

                }
            ]
        },
        {
            test: /\.css/,
            loaders: ['style-loader', 'css-loader'],
            include: __dirname + '/src'
        }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./src/main/resources/templates"),
    compress: true,
    port: 9000,
    stats: 'errors-only',
    historyApiFallback: true,
    open: true
  },
  devtool: 'inline-source-map'
}

module.exports = config;