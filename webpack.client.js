const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
    mode: "development",
    entry: {
        client: "./src/client/index.js"
    },
    output: {
        path: path.join(__dirname, "./src/public"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};

module.exports = merge(config, baseConfig);
