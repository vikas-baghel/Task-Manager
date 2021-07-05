const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const port = 3000

// for handling json post
app.use(express.json())

// static routes
app.use(express.static('./public'))

//routes
app.use('/api/v1/tasks',tasks)
app.get('/hello',(req,res)=>{
    res.status(200).send("Hello World");
})



app.listen(port,()=>{
    console.log(`Server listening to ${port}...`);
})
