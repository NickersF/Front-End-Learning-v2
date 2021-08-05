var path = require('path');

module.exports = {
    context: path.resolve(__dirname, './src/ts'),
    mode: 'development',
    entry: {
        main: './main.ts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist/js'),
    }
};