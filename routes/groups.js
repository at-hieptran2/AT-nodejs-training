var express = require('express');
var router = express.Router();
var groupController = require('../controller/GroupController');

router.post('/add', groupController.insertGroup);

module.exports = router;
