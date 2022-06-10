const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
    target: "node",
    mode: "development",
    externals: [nodeExternals()],
    entry: {
        server: "./src/server/index.js"
    },
    output: {
        path: path.resolve(__dirname, "build/server"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    "isomorphic-style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};

module.exports = merge(config, baseConfig);
