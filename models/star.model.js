const mongoose = require('mongoose')

const starSchema = new mongoose.Schema({
  name: {
    type: String,
    uniqe: true,
    required: true
  },
  temperature: {
    type: String,
    required: true
  },
  massa: {
    type: String,
    required: true
  },
  diametr: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  planets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Planet' }]
}, { timestamps: true })

module.exports = mongoose.model('Star', starSchema)