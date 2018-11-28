const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

exports.devServer = ({host, port} = {}) => ({
    devServer: {
        stats: "errors-only",
        host,
        port,
        open: true,
        overlay: true,
        contentBase: "dist/"
    }
});

exports.loadCss = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                include,
                exclude,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
});

exports.extractCss = ({include, exclude, use = []}) => {
    const plugin = new MiniCssExtractPlugin({
        filename: "[name].css",
    });

    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    exclude,
                    use: [
                        MiniCssExtractPlugin.loader,
                    ].concat(use),
                },
            ],
        },
        plugins: [plugin],
    };
};

exports.loadFonts = ({include, exclude} = {}) => {
    return {
        module: {
            rules: [
                {
                    test: /\.(ttf|eot|svg|woff|woff2)$/,
                    include,
                    exclude,
                    use: ["url-loader"]
                }
            ]
        }
    }
};

exports.loadImages = ({include, exclude, options} ={}) => {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png)$/,
                    include,
                    exclude,
                    use: {
                        loader: "file-loader",
                        options,

                    }
                }
            ]
        }
    }
};

exports.loadJavascript = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include,
                exclude,
                use: "babel-loader"
            }
        ]
    }
});

exports.generateSourceMaps = ({type}) => ({
    devtool: type
});

exports.cleanup = path => ({
    plugins: [new CleanWebpackPlugin([path])]
});

exports.manifest = () => ({
    plugins: [new ManifestPlugin()]
});

exports.copyAssets = ({from, to} = {from: "src/images", to: "images"}) => ({
    plugins: [new CopyWebpackPlugin([
        {
            from,
            to
        }
    ])],
});