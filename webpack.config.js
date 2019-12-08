var path=require('path')
module.exports={
    entry:'./Src/action/Approute.js',

    output:{
        path:path.join(__dirname,'public')
        ,filename:"bundle.js"
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        }]
    },
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true
    }

};