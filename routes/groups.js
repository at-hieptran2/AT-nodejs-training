var express = require('express');
var router = express.Router();
var groupController = require('../controller/GroupController');

router.get('/', groupController.getListGroup);

router.post('/add', groupController.addGroup);

router.delete('/delete/:id', groupController.deleteGroup);

router.put('/update/:id', groupController.updateGroup);

module.exports = router;
