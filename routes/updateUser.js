const express = require('express');
const router = express.Router();
var path = require('path');

const userController = require("../controllers/userController");

router.patch('/:id', userController.update);

module.exports = router;