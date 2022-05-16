const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();
const cors = require('cors');
app.use(cors())

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.set('view engine', "ejs");

const dbConfig = require('./cfg/database.cfg.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected");
}).catch(err => {
    console.log('Cannot connect to the db', err);
    process.exit();
});



app.use("/", require("./routes/root"));
app.use("/home", require("./routes/home"));
app.use("/contact", require("./routes/contact"));
app.use("/login", require("./routes/login"));
app.use("/sign_up", require("./routes/signup"));
app.use("/categories", require("./routes/category"));
app.use("/user", require("./routes/userRoute"));
app.use("/crud_panel", require("./routes/crud_panel"));


app.listen(port, () => console.log("it works at port: " + port));