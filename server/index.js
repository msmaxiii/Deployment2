const express = require('express');
const path = require('path');

const app = express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../index.html'));
});

const port = process.env.PORT || 7070;

app.listen(port,()=>{
    console.log(`I'm here on port ${port}`);
})