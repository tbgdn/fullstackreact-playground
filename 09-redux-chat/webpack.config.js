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
            title: "Chapter 09 - Redux Chat"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            },
            {
                test: /.+\.css$/,
                use: [ "style-loader", "css-loader" ]
            },
            {
                test: /.+\.(png|ttf|woff|woff2|eot|svg|json)$/,
                use: "url-loader"
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