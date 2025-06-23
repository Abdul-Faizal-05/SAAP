require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {Pool} = require('pg')

const app = express();

app.use(cors());
app.use(express.json());

const database = new Pool({
    user: process.env.db_username,
    host: process.env.db_host,
    database: process.env.db_database,
    password: process.env.db_password,
    port: process.env.db_port
});

app.post('/register',async(req,res)=>{
    const {name,dob,email,password} = req.body;
    console.log(name,dob,email,password);
    res.status(200).json({message:"Data received successfully"})
})

database.connect()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(5000, () => {
      console.log('Server is running successfully on port 5000');
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });
