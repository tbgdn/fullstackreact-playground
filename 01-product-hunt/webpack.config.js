const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const parts = require("./webpack.parts");

const PATHS = {
    app: path.join(__dirname, "src"),
    build: path.join(__dirname, "dist"),
};

const commonConfig = merge([
    {
        entry: {
            app: path.join(PATHS.app, "index.js")
        }
    },
    {
        plugins: [
            new HtmlWebpackPlugin({
                title: "01 Product Hunt - Fullstack React",
                template: "./src/templates/index.html"
            })
        ]
    },
]);

const productionConfig = merge([
    parts.extractCss({
        use: "css-loader",
    }),
    parts.loadFonts(),
    parts.loadImages(),
    parts.loadJavascript({include: PATHS.app}),
    parts.cleanup(PATHS.build),
    parts.generateSourceMaps({type: "source-map"}),
    parts.manifest(),
    parts.copyAssets(),
]);

const developmentConfig = merge([
    parts.devServer({
        port: 3000,
    }),
    parts.loadCss(),
    parts.loadFonts(),
    parts.loadImages(),
    parts.loadJavascript({include: PATHS.app}),
    parts.cleanup(PATHS.build),
    parts.copyAssets(),
]);

module.exports = mode => {
    process.env.BABEL_ENV = mode;
    if (mode === "production") {
        return merge(commonConfig, productionConfig, {mode});
    } else {
        return merge(commonConfig, developmentConfig, {mode});
    }
};