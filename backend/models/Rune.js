var mongoose = require('mongoose')




var runeSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: {full: String},
  rune: {tier: String, type: String}
  stats: {stat: Number}
})

var Rune = mongoose.model('Rune', runeSchema);

module.exports = Rune
