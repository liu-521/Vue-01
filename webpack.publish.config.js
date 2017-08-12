// 发布的时候用这个文件

// 导入关于路径的模块
var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    // entry:path.resolve(__dirname,'src/main.js'),
    entry: {
        app: path.resolve(__dirname, 'src/main.js'),
        vendors: ['vue']
    },
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
            // {
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ]
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
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
                // use: 'url-loader?limit=25000&name=images/demo1.jpg'
            },
        ]
    },
    // webpack-dev-server的一些配置信息
    devtool: 'eval',

    // webpack中的所有插件
    plugins: [
        // 压缩的插件,但是我们一般不用,用-p
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // 提取css的插件
        new ExtractTextPlugin("app.css"),
        // 自动生成html文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            htmlWebpackPlugin: {
                "files": {
                    "css":["app.css"],
                    "js": ["bundle.js"]
                }
            },
            // 压缩 情怀至上
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),

        // 分离第三方应用信息的插件
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),
    ]




}

