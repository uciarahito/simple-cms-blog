const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String
})

let User = mongoose.model('User', userSchema)
module.exports = User