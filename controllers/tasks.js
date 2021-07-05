

const getAllTasks = (req, res) => {
    res.send("All updated items");
}

const getTask = (req, res) => {
    res.send(`Get single Task with id: ${req.params.id}`)
}


const createTask = (req, res) => {
    res.json(req.body)
}
const updateTask = (req, res) => {
    res.send("Update Task")
}
const deleteTask = (req, res) => {
    res.send("Delete Task")
}


module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }