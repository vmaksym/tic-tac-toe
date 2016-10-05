const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        path: '__dirname/build',
        filename: 'app.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"develop"'
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};