var group = require('../models/group');

exports.getListGroup = function(req, res) {
  //call function from group model
  group.showAllGroup(res);
};

exports.addGroup = function(req, res) {
  group.createGroup(req.body, res);
};

exports.deleteGroup = function(req, res) {
  group.deleteGroupId(req, res);
}

exports.updateGroup = function(req, res) {
  group.updateGroup(req, res);
}
