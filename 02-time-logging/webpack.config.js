const parts = require("./webpack.parts");
const merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
    APP: path.join(__dirname, "src"),
    BUILD: path.join(__dirname, "dist")
};

const commonConfig = merge([
    {
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/templates/index.html",
                templateParameters: {
                    pageHeader: "Time Tracker",
                    title: "02 Time Tracking"
                }
            }),
        ],
        stats: "verbose"
    },
    parts.loadJavascript({include: PATHS.APP}),
    parts.loadCss(),
    parts.loadFonts({use: "url-loader"}),
    parts.loadImages({use: "url-loader"}),
    parts.cleanup(PATHS.BUILD),
]);

const productionConfig = merge([]);

const developmentConfig = merge([
    parts.devServer({ port: 3000 }),
]);

module.exports = mode => {
    process.env.BABEL_ENV = mode;
    if (mode === "production"){
        return merge(commonConfig, productionConfig, {mode});
    }else{
        return merge(commonConfig, developmentConfig, {mode});
    }
};