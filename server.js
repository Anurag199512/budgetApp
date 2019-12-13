const path=require('path')
const express=require('express')
const app=express()
const port=process.env.PORT||3001

const pubpath=path.join(__dirname,'public')
app.use(express.static(pubpath))
console.log(pubpath)
console.log(path.join(pubpath,'index.html'))

app.get('*',(req,res)=>{
    res.sendFile(path.join(pubpath,'index.html'))
})

app.listen(port,()=>{
    console.log('server is running....'+port)
})
