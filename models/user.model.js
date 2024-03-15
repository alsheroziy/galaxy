const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    uniqe: true,
    match: [
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'Plese enter valid email address'
    ]
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  adminStatus: {
    type: Boolean,
    default: false
  },
  apiKey: {
    type: String,
    uniqe: true,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

//hashing password with bcrypt
userSchema.pre('save', async function(next) {
  if(!this.isModified('password')){
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

//Generate jwt token
userSchema.methods.generateJwtToken = function() {
  return jwt.sign({ id: this._id, email: this.email }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })
}

//Check user entered password with hashed password
userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)