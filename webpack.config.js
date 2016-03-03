module.exports = {
    entry: './client/js/index.js',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css?modules!sass'
            },
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-1']
                }
            }
        ]
    },
    devtool: "#source-map"
};