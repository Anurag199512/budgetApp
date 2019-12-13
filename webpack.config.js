const path=require('path')
const webpack=require('webpack')
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
    plugins:[
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH':JSON.stringify(process.env.FIREBASE_AUTH),
            'process.env.FIREBASE_DB_URL':JSON.stringify(process.env.FIREBASE_DB_URL),
            'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGE_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGE_SENDER_ID),
            'process.env.FIREBASE_APP_ID':JSON.stringify(process.env.FIREBASE_APP_ID)
        })
    ],

    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true
    }
};

