require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


app.post('/register',async(req,res)=>{
    const {name,dob,email,password} = req.body;
    console.log(name,dob,email,password);
    res.status(200).json({message:"Data received successfully"})
})

app.listen(5000,()=>{
    console.log('Server was successfully running on 5000');
})