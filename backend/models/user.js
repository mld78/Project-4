var mongoose = require('mongoose')



// it's possible the name "method" isn't the best, we could
// consider changing it to function or something.
// var userSchema = new mongoose.Schema({
// 	local: {
//     	title: String,
//     	name: String,
// 		email: String,
// 		password: String,
// 		isAdmin: { type: Boolean, default: false }
// 	}
// 	})
// userSchema.methods.encrypt = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
// }
//
// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password)
// }
//
// var User = mongoose.model('User', userSchema)
//
// module.exports = User


var userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name:  { type: String, required: true }
});

// add bcrypt hashing to model (works on a password field)!
userSchema.plugin(require('mongoose-bcrypt'));

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
userSchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var User = mongoose.model('User', userSchema);

module.exports = User;
