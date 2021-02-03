
module.exports = {
    
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins:[
        new (require('browser-sync-webpack-plugin'))({
            https: true,
            server: { baseDir: ['.'] }
        })
    ]
};