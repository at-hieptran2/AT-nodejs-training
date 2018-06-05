var express = require('express');
var router = express.Router();
var usreController = require('../controller/user-controller');

/* GET users listing. */
router.get('/', userController.getList);

router.get('/:id', userController.getUser);

router.get('/:name/:phone', userController.findtUserByNameAndPhone);

router.post('/add', userController.addUser);
// router.post('/update', userController.updateUser);
router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUserId);

module.exports = router;
