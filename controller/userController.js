var userModel = require('../models/user');

exports.index =  function() {
  console.log('controller runs!');
}

exports.getUser = function(req, res) {
  userModel.getUser(req.params.id, function(err, callback) {
    if(err) throw err;
    res.send(callback);
  });
}

exports.findUser = function(req, res) {
  userModel.findUserNameAndPhone(req.params.name, req.params.phone, function(err, callback) {
    if(err) throw err;
      res.send(callback);
  });
}

exports.updateUser = function(req, res) {
  userModel.updateUser(req.params.id, req.body, function(err, callback) {
    if(err) throw err;
    res.send(callback);
  });
}

exports.removeUser = function(req, res) {
  userModel.removeUser(req.params.id, function(err, callback) {
    if(err) throw err;
   res.send(callback);
  });
}

exports.insertUser = function(req, res) {
  userModel.insertUser(req.body, function(err, callback) {
    if(err) throw err;
    res.send(callback);
  });
}
