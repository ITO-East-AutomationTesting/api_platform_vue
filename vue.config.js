/* eslint-disable */
module.exports = {
    lintOnSave: true,
    productionSourceMap: false,

    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'src/index.html',
            favicon:'src/assets/favicon.ico',
            // 在 dist/index.html 的输出
            // filename: 'src/index.html',
            // 当使用 title 选项时，

        },

    },
    devServer: {
        host: '127.0.0.1',
        // host: '192.168.112.153',
        port: 8080,
        proxy: {
            '/api/': {
                // target: 'http://192.168.112.153:8090',
                target: 'http://127.0.0.1:5000',
                // target: 'http://192.168.112.70:8080',
                changeOrigin: true,
            }
        },
    },
    css: {
        loaderOptions: {
            // 设置 scss 公用变量文件
            sass: {
                data: `@import '~@/assets/css/color.scss';`
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}