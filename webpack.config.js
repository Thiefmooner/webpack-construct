'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
/**
 * 注意：
 * VueLoaderPlugin 的导入方式改变了
 * vue-loader@next 当前需要自行指定版本
 * 新增了 @vue/compiler-sfc 替换原来的 vue-template-compiler
 * 其它 Webpack 基本配置仅仅配置了样式表和图像的加载
 */
module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext]'
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'assert/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({

            filename: 'index.html',
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        compress: true,
        port: 8088
    }
}