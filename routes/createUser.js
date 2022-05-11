const express = require('express');
const router = express.Router();
var path = require('path');

const userController = require("../controllers/userController");

router.post('/', userController.create);

module.exports = router;