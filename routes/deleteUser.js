const express = require('express');
const router = express.Router();
var path = require('path');

const userController = require("../controllers/userController");

router
    .route('/')
    .delete('/:id', userController.delete)
    .get((req, res) => res.render(path.resolve('public/getAll.ejs')))
    .post((req, res) => res.send("POST"))

module.exports = router;