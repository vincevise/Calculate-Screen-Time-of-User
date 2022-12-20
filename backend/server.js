const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())
app.post('/',(req,res)=>{
    console.log(req.body)
    res.status(200).json({message:req.body})
})

app.listen(3200,()=>console.log('listening on port 3200')) 