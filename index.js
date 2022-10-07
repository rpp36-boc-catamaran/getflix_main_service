require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=>{
  res.json({message:'Welcome to Getflix!'})
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})