require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {database} = require('./db')
const {roleAuth} = require('./middleware/roleAuth'); 
const app = express();

app.use(cors());
app.use(express.json());


app.post('/register',roleAuth,async(req,res)=>{
    const {name,dob,email,password} = req.body;


    const response= await database.query(
        'INSERT INTO users(name, dob, email, password,role) VALUES ($1, $2, $3, $4,$5) returning *',
        [name, dob, email, password,req.role]
    );
    
    res.status(200).json({"Data sent:": response.rows[0]});
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

  