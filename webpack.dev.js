const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    output: {
        filename: 'dev-bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'Client',
            type: 'var',
        },
        clean: true,
    },
    optimization: {
        minimize: true,
    },
});
