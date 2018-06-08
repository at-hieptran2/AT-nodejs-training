var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
  name: {
    type: String
  },
  encrypt_password: {
    type: String
  },
  age: {
    type: Number
  },
  phone: {
    type: String
  }
});

var User = mongoose.model('User', userSchema);
// var user = new User;

module.exports.createUser = function(user, callback) {
  User.create(user, callback)
};

module.exports.showAllUser = function(callback) {
  User.find({}, callback)
}

module.exports.updateUser = function(req, callback) {
  User.findByIdAndUpdate({_id: req.params.id}, req.body, callback)
}

module.exports.getUser = function(req, callback) {
  User.findById({_id: req.params.id}, callback)
}

module.exports.findtUserByNameAndPhone = function(req, callback) {
  User.find({ $and: [{ name: req.params.name }, { phone: req.params.phone }] }, callback);
}

module.exports.deleteUserId = function(id, callback) {
  User.findByIdAndRemove(id, callback);
}
