var express = require('express');
var router = express.Router();

var userController = require('../controller/userController');
const validate = require('express-validation');
var userValidator = require('../lib/validation/UserValidations');

router.get('/', userController.getList);

router.get('/:id', userController.getUser);

router.get('/:name/:phone', userController.findtUserByNameAndPhone);

router.post('/add', validate(userValidator.register), userController.addUser);
router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUserId);
 
module.exports = router;
