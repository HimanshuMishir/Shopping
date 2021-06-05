const express = require('express');
require('dotenv').config();





const app = express();
app.use(express.static('public'));

app.listen(process.env.PORT, ()=>{
    console.log(`The server is up and running on port ${process.env.PORT}`);
});