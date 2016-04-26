module.exports = {
    entry: './build/client/index.js',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css?modules!sass'
            }
        ]
    },
    devtool: "#source-map"
};