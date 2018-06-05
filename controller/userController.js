var User = require('../model/user');
var createUserSchema = require('../validation/user-validation');
var joi = require('../validation/user-validation');

exports.getList = function(err, res) {
  console.log(123);
  //call function from user model
  User.showAllUser(function(err, List) {
    if (List) {
      res.render('layout', { List });
    } else {
      res.send('Error :' + err);
    }
  });
};

exports.addUser = function(req, res) {
  createUserSchema.validate(req.body, {abortEarly: false}) //abortEarly - collect all errors not just the first one
  .then(validatedUser => {
    res.status(200).send(`user ${JSON.stringify(validatedUser)} created`);
  })
  .catch(validationError => {
    const errorMessage = validationError.details.map(d => d.message);
    res.status(400).send(errorMessage);
  });
};

exports.updateUser = function(req, res) {
  User.updateUser(req, function(err, result) {
    if (result) {
      res.send('Update sucess');
    } else {
      res.send('not found');
    }
 });
};

exports.getUser = function(req, res) {
  User.getUser(req, function(err, result) {
    if (result) {
      res.send(result);
    } else {
      res.send('not found!');
    }
  });
};

exports.deleteUserId = function(req, res) {
  User.deleteUserId(req.params.id, function(err, result) {
    if(!result) {
      res.send('Not found!');
    } else {
      res.send(result);
    }
  });
  
};

exports.findtUserByNameAndPhone = function(req, res) {
  User.findtUserByNameAndPhone(req, function(err, result) {
    res.send(result);
  });
};
