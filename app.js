const express = require('express')
const app = express()
const PORT = 3000

var homeRouter = require('./routes/home');

app.set('view engine', 'ejs');

app.use('/',homeRouter);
//app.use('/',homeRouter);


app.listen(PORT, (error) =>{
  if(!error)
      console.log("Server is Successfully Running, and App is listening on port "+ PORT)
  else 
      console.log("Error occurred, server can't start", error);
  }
);