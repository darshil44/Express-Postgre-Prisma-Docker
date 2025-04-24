const express = require('express');

const app = express();
const PORT = 5080 

app.get('/', (req,res)=>{
    console.log('hello', req.method);
    res.send('Hello').status(201)
    
})


app.listen(PORT, ()=>console.log(`server started on ${PORT}`));