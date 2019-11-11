const express = require('express');
const mongoose = require ('mongoose'); 
const app = express();
require('dotenv/config');


//Middlewares
app.use('/posts' ,() => {
    console.log('Midddlewares mesage');
})

//Routes 
app.get('/', (req, res) =>  {
    res.send('Home');
})
// connecting mongoDb 
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('connected to ')
);


app.listen(3000); // listening to the server 

