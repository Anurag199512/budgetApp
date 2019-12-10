const path=require('path')
const express=require('express')
const app=express()
const port=process.env.PORT||3000

const pubpath=path.join(__dirname,'public')
app.use(express.static(pubpath))
console.log(pubpath)

app.get('*',(req,res)=>{
    res.sendfile(path.join(pubpath,'index'))
})

app.listen(port,()=>{
    console.log('server is running....'+port)
})
