//this is our model(which means our documents or database schemap)
const Task = require('../models/task')
const asyncWrapper = require('../Middleware/async')
const{creatMyError}=require('../errors/errorClass')


//this gets all the tasks
const getAllTasks = asyncWrapper( async (req, res) => {
 
  const tasks = await Task.find({})
  //let say you want to filter only name,id, or name and id alone etc
  const names = tasks.map((nam) => {
    const { name, _id } = nam
    return {name,_id}  
  })
    res.status(200).json({tasks})
 
})
//this allows us to create new task
//req.body: allws us to enter our own data from the browser
const postTask =asyncWrapper( async (req, res) => {
 
  const task = await Task.create(req.body)
  //since the method name is POST, our browser already sens that something will enter the 'req.body'
    if (!task) {
      return res.status(404).json({msg:'unable to create'})
    }
    res.status(201).json({task})
})
//this allows us to get one particular task
const getOneTask =asyncWrapper( async (req, res, next) => {
 
    const {id:taskID} = req.params
    const get_one = await Task.findOne({ _id: taskID })
    if (!get_one) {
      return next(creatMyError(`no task found with id ${taskID}`,404))
    }
    res.status(200).json({get_one}) 
})
//this allows us to update a task
const updateTask =asyncWrapper( async (req, res,next) => {

    const { id: taskID } = req.params
    const update_one = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true,useFindAndModify:false })
    if (!update_one) {
      return next(creatMyError(`no task found with id ${taskID}`,404))
    }
    res.status(200).json({update_one}) 
})
//this allows us to delete a task
const deleteTask =asyncWrapper( async  (req, res,next) => {
 
    const { id: taskid } = req.params
    const delet_one = await Task.findOneAndDelete({ _id: taskid })
    if (!delet_one) {
      return next(creatMyError(`no task found with id ${taskID}`,404))
    }
    res.status(200).json({delet_one})
})

module.exports = { getAllTasks, postTask, getOneTask, updateTask, deleteTask }
