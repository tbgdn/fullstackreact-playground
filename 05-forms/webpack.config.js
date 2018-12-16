const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({
    mode: "development",
    devtool: "source-map",
    devServer: {
        port: 3000,
        open: "Chrome"
    },
    module: {
        rules: [
            {
                test: /.+\.(js|jsx)$/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /.+\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /.+\.(png|ttf|woff|woff2|eot|svg)$/,
                use: [
                    "url-loader"
                ]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin()
    ],
    resolve:{
        extensions: [
            ".js",
            ".jsx"
        ]
    }
});