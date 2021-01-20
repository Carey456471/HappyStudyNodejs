// create a express app
var express = require("express");
var app = express();

// set express app to use view engine of ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");     //set the view directory
app.set("view options", {layout : false});

// set app port
app.set("port", process.env.PORT || 8080);

app.use(express.static(__dirname));

//set the app that render the index.ejs in views folder
app.get("/", function(req, res)
{
    res.render("index", {title : "Home Page"});
});

app.listen(app.get("port"));
console.log("listening on port "+ app.get("port") +"...");