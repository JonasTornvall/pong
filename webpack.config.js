const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;
const node_dir = __dirname + '/node_modules';

const common = {
    entry: ['babel-polyfill', 'react-hot-loader/patch', './src/main/js/main.js'],
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options:
                    {
                        presets:['react']
                    }
                }
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    }, {
                        loader: 'css-loader', // translates CSS into CommonJS
                    }, {
                        loader: 'sass-loader', // compiles Sass to CSS
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            port: 9090,
            proxy: {
                '/': {
                    target: 'http://localhost:8080',
                    secure: false,
                    prependPath: false
                }
            },
            publicPath: 'http://localhost:9090/',
            historyApiFallback: true
        },
        devtool: 'source-map'
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {});
}