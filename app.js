const express = require('express');
const mongoose = require ('mongoose'); 
const app = express();
require('dotenv/config');

//Import Routes 
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

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

