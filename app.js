//------------------------------------------------------------
// main js
//------------------------------------------------------------

// require modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// require custom modules
//const db = require("./db");
const { home } = require("./controller");
// const {home, login, signup}

// create a express app
var app = express();

// set express app to use view engine of ejs
app.set("view engine", "ejs");
//app.set("views", __dirname + "/views");     //set the view directory
app.set("view options", {layout : false});

console.log(__dirname);

// set app port
app.set("port", process.env.PORT || 3000);

// serve static file
//app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'css')))

//set the app that render the index.ejs in views folder
app.get("/", function(req, res)
{
   res.redirect("/pages/index");
});

app.get("/pages/index", function(req, res)
{
    res.render("pages/index", {title : "Home Page"});
});

// routes
//app.get("/", home.index);

app.listen(app.get("port"));
console.log("listening on port "+ app.get("port") +"...");