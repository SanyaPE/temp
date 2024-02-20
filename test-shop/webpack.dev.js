const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js",
    },
    devServer: {
        watchFiles: path.join(__dirname, "src"),
        port: 8500,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "",
                        },
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: { sourceMap: true },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: { outputStyle: "expanded" },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map",
        }),
    ],
});
