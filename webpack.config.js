const webpack = require("webpack");
module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: "./dist"
    }
}