const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//نضيف ثابت للإضافة
const path = require('path');

module.exports = {
    entry:"./src/js/index.js",//الملف المدخل 
    output: {
        path: path.resolve(__dirname, 'build'),//اسم مجلد الملفات المخرجة
        filename: 'js/bundle.js',//اسم الملف المخرج
        assetModuleFilename: "img/[name][ext]"
      },
      devServer:{
        static: {

            directory: path.join(__dirname, 'build'),
    
        },
        port:1001,
        devMiddleware: {
            writeToDisk: true
         },
         hot: false,
         liveReload: true,
         open: true,
    },
      module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource'
          },
          {

            test: /\.html$/i,

            loader: 'html-loader',
            

          },
          {//نضيف هذا الكود
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",//الملف المدخل 
            filename:"index.html",//الملف المخرج
        }),
        new HtmlWebpackPlugin({
            template:"./src/watch.html",//الملف المدخل 
            filename:"watch.html",//الملف المخرج
        }),
        new HtmlWebpackPlugin({
            template:"./src/search.html",//الملف المدخل 
            filename:"search.html",//الملف المخرج
        }),
        new HtmlWebpackPlugin({
            template:"./src/log.html",//الملف المدخل 
            filename:"log.html",//الملف المخرج
        }),
        new HtmlWebpackPlugin({
            template:"./src/channel.html",//الملف المدخل 
            filename:"channel.html",//الملف المخرج
        }),
        new MiniCssExtractPlugin({
            filename:"css/style.css"
    }),
  ],
};