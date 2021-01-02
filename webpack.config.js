const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    port: 4000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: {},
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|otf|woff|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve( __dirname, 'public/index.html' ),
      filename: 'index.html'
    })
  ],
  mode: 'development'
};