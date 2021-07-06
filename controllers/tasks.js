const Task = require('../models/Task')

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task)
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getAllTasks = async (req, res) => {
    try {
        // argument of .find() is the filter conditions
        // since we require all task, we keep it empty
        const tasks = await Task.find({})
        // allTasks is a array
         res.status(200).json({tasks:tasks})
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

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const task = await Task.findOneAndDelete({_id:taskId});
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskId} to delete`})
        }
        res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,  //return the new updated value
            runValidators:true // should run the validators with the updated value also
        })
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskId} to delete`})
        }
        res.status(200).json({task})
        // res.status(200).json({id:taskId,data:req.body})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }