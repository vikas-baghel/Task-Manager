const mongoose = require('mongoose')

// schema type, i.e. what will be structure of a row
const TaskSchema = new mongoose.Schema({
    name:{
      type:String,
      required:[true,'Must provided a task'],
      trim:true,
      maxlength:[20,'Length cannot be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})
// model=table
// document=row

// name of model and its schema
module.exports = mongoose.model('Task',TaskSchema)