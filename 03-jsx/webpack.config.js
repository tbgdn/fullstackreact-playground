const HtmlPlugin = require("html-webpack-plugin");

module.exports = ({
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin()
    ],
    devServer: {
        open: "Chrome",
        port: 3000
    },
    resolve: {
        extensions: [
            ".js",
            ".jsx"
        ],
    }
});