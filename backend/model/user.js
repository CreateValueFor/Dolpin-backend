var mongooes = require('mongoose')

const userSchema = new mongooes.Schema({
  email: String,
  password: String,
  nickname: String,
  wallet: String,
  updated_at: String,
  status: String,
  picture_id: String,
  user_type: String,
  publicKey: String,
})

const User = mongooes.model('User', userSchema)

module.exports = User
