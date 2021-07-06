const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const port = 3000

// static routes
app.use(express.static('./public'))

// for handling json post
app.use(express.json())


//routes
app.use('/api/v1/tasks', tasks)

const start =  async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server listening to ${port}...`);
        })
        
    } catch (error) {
        console.log(error);
    }
}
start()

