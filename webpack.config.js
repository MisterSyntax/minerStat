const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './index.js',
    ],
    output: {
        path: path.join(__dirname, './dist/assets'),
        filename: 'bundle.js',
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "./dist"),
        historyApiFallback: {
            index: 'index.html'
        },
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["latest", "stage-0", "react"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: "postcss-loader" }
                ]
            }
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};