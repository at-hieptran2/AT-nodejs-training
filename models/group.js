var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
  name_group: {
    type: String,
  },
  note: {
    type: String,
  }
});

var Group = mongoose.model('Group', GroupSchema);

module.exports.insertGroup = function(req, res) {
  if(req) {
    var group = new Group({
      name_group: req.name_group,
      note: req.note 
    });
    group.save();
    res.send('Successed!');
  } else {
    res.send('Failed!');
  }
} 
