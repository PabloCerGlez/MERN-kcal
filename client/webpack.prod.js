const webpack=require('webpack')
const merge=require('webpack-merge')
const common=require('./webpack.common')
const UglifyPlugin=require('uglifyjs-webpack-plugin')
module.exports=merge(common,{
     mode:'product',
     devtool:'source-map',
     plugins:[
          new UglifyPlugin(
               {
                  sourceMap:true  
               }
          ),
          new webpack.DefinePlugin({
               'process.env':{
                    NODE_ENV:JSON.stringify('production')
               }
          })
     ]
     devServer:{
          contentBase:'./dist'
     }
})