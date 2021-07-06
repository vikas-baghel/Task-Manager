const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        // argument of .find() is the filter conditions
        // since we require all task, we keep it empty
        const allTasks = await Task.find({})
        // allTasks is a array
        res.status(200).json({allTasks:allTasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    // res.send("All items");
}

const getTask = async (req, res) => {
    try {
        const {id:taskId} = req.params
        const task = await Task.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskId}`})
        }
        
        res.status(200).json({task})
        // res.send(`Get single Task with id: ${req.params.id}`)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task)
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const updateTask = (req, res) => {
    res.send("Update Task")
}
const deleteTask = (req, res) => {
    res.send("Delete Task")
}


module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }