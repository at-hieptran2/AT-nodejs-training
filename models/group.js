var mongoose = require('mongoose');
var schema = mongoose.Schema;

var groupSchema = new schema({
  name_group: {
    type: String
  },
  note: {
    type: String
  }
});

var Group = mongoose.model('Group', groupSchema);
var group = new Group;

module.exports.createGroup = function(req, res) {
  if(req) {
    group.name_group = req.name_group;
    group.note = req.note;
    group.save();
    res.send('create group success!')
  } else {
    res.send('error');
  }
};

module.exports.showAllGroup = function(res) {
  Group.find({}, function(err, List) {
    if (List) {
      res.render('layout', { List });
    } else {
      res.send('Error :' + err);
    }
  })
}

module.exports.updateGroup = function(req, res) {
  // Group.findByIdAndUpdate(req._id, req, function(result) {
  Group.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, result) {
    if (result) {
      res.send('Update sucess');
    } else {
      res.send('not found');
    }
  })
}

module.exports.deleteGroupId = function(req, res) {
  Group.deleteOne({_id: req.params.id}, function(err, result) {
    if (result) {
      res.send('deleted group');
    } else {
      res.send('not found');
    }
  })
}
