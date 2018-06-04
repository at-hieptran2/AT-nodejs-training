var groupModel = require('../models/group');

exports.insertGroup = function(req, res) {
  groupModel.insertGroup(req.body, res);
}