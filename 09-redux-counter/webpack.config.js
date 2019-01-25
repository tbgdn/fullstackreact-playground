const HtmlWebpackPlugin = require("html-webpack-plugin");
const Paths = require("./src/paths");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: [
        Paths.INDEX
    ],
    devServer: {
        port: 3000,
        open: "Chrome"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Chapter 09 - Redux Counter"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [
            ".js",
            ".jsx"
        ]
    }
};