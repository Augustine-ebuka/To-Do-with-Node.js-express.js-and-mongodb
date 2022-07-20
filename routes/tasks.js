const express = require('express')
const router = express.Router()

const { getAllTasks, postTask, getOneTask, updateTask, deleteTask } = require('../controllers/controllerTask')
//we could also write our rout like this too
// const Router = router.get('/',getALLTasks)...
router.route('/').get(getAllTasks)
router.route('/').post(postTask)
router.route('/:id').get(getOneTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)




module.exports = router;