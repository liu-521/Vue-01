
// 导入关于路径的模块
var path = require('path')
var webpack = require('webpack')

module.exports={
    entry:path.resolve(__dirname,'src/main.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            // 解析vue文件的加载器1
            {
                test: /.vue$/,
                use: 'vue-loader', //vue-loader 需要安装vue-template-compiler
            },
            // 解析css的加载器
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // es6转es5的加载器
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            // 图片处理的加载器
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192
            //             }
            //         }
            //     ]
            // },
            // 图片加载器 25000bit ~3kb
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=25000&name=images/[name].[ext]'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader'
            }
        ]
    },

    // webpack-dev-server的一些配置信息
    devtool: 'eval',
    devServer: {
        contentBase: __dirname + '/src', // 当前服务器监听的路径
        hot: true,  // 热更新
        port:8080,  // 定义端口号
        host: 'localhost',
        open:true    // 是否自动打开浏览器
    },


}
