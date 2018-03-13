const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        'whatwg-fetch',
        './index.js',
    ],
    output: {
        path: path.join(__dirname, './dist/assets'),
        filename: 'bundle.js',
        publicPath: 'assets'
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, './dist'),
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
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'env'],
                            plugins: ['transform-es2015-spread', 'transform-object-rest-spread'],
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            sourceMap: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    { loader: 'postcss-loader' }
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
