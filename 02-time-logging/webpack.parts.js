const CleanWebpackPlugin = require("clean-webpack-plugin");
const server = require("./webpack.api.server");

exports.devServer = ({host, port, params} = {}) => ({
    devServer: {
        stats: "errors-only",
        host,
        port,
        open: true,
        overlay: true,
        before: server.api
    }
});

exports.loadJavascript = ({include, exclude} = {}) => loadAsset({
    test: /\.js$/,
    include,
    exclude,
    use: "babel-loader"
});

exports.loadCss = ({include, exclude} = {}) => loadAsset({
    test: /\.css$/,
    include,
    exclude,
    use: ["style-loader", "css-loader"],
});

exports.loadFonts = ({include, exclude} = {}) => loadAsset({
    test: /\.(ttf|eot|svg|woff|woff2)$/,
    include,
    exclude,
    use: "url-loader"
});

exports.loadImages = ({include, exclude} = {}) => loadAsset({
    test: /\.(jpg|png)$/,
    include,
    exclude,
    use: "url-loader",
});

const loadAsset = ({test, include, exclude, use} = {}) => ({
    module: {
        rules: [
            {
                test,
                include,
                exclude,
                use
            },
        ],
    },
});

exports.cleanup = path => ({
    plugins: [
        new CleanWebpackPlugin([path]),
    ],
});
