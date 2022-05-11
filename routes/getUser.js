const express = require('express');
const userController = require("../controllers/userController");
const router = express.Router();
var path = require('path');


router
    .route('/')
    .get((req, res) => res.render(path.resolve('public/getUser.ejs')))
    .post((req, res) => res.send("POST"))

module.exports = router;