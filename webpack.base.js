const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 Chrome versions"]
                }
              }
            ],
            "@babel/preset-react",
            "@babel/preset-typescript"
          ]
        }
      },
      
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};
