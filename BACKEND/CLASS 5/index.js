const express = require('express')
const dotenv = require('dotenv')  
dotenv.config()
const app = express()
         
app.get("/",(req,res)=>{
    res.send({msg: "It's working"})
})
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is running on the port${port}`)
}) 