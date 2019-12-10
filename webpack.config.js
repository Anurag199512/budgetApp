const path=require('path')
 
module.exports={
   // entry:'./src/app1.js',
     entry:'./Src/action/Approute.js',
    output:{
        //this requires abosiole path of where to keep the bundle
        path:path.join(__dirname,'public'),
        
        filename:'bundle.js'
    
    },

    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },
        {   
            test:/\.s?css$/,
            //we can provide multiple loader using use
            use:['style-loader','css-loader','sass-loader']
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true
    }
};

