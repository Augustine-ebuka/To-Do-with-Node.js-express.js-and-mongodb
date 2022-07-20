const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js')
const connectDB = require('./DB/connect')
const not_found = require('../starter/Middleware/not-found')
const errorHandler = require('../starter/Middleware/error-handler');
require('dotenv').config()
//const port = 3000


//route goes here
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(('./public')))


app.use('/api/v1/tasks', tasks)
app.use(not_found)
app.use(errorHandler)
const start_conn_server = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(process.env.PORT, console.log(`connected to the database and server is listening on port ${process.env.PORT}...`))

  } catch (error) {
    console.log(error);
  }
}
start_conn_server()



//order of direction of task
//app.js
//route/task.js
//controller/controllerTask.js
//model or database/task.js
//cpnnectionto database/ connect.js



