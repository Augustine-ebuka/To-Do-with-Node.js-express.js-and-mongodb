const mongoose = require('mongoose')
//const { stringify } = require('nodemon/lib/utils')


//mongoose.schema: allows us to construct the structure of our database table
const taskschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required:[true,'you need to enter name'],
      trim: true,
      maxLength:[20,'the maximum leghth cannot pass pass 20']
    },
    completed: {
      type: Boolean,
      default: false
    }
  })
module.exports = mongoose.model('Task', taskschema)
//little gist about our model, our model allows to create our own database from node.
//if the name of our collection is not set(name of collection simply means name of our Database), mongoose set it
//to 'Test' by default, and set the name of the table to the name of 'this file(pluralize)by default'