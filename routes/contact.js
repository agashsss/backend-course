const express = require('express');
const router = express.Router();
var path = require('path');

router
    .route('/')
    .get((req, res) => res.render(path.resolve('public/contact.ejs')))
    .post((req, res) => res.send("POST"))

module.exports = router;