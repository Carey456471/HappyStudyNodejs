//------------------------------------------------------------
// main js
//------------------------------------------------------------

// require modules
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");

// require custom modules
//const mongoDB = require("./mongoDB");
const { home, user } = require("./controller");

// create a express app
var app = express();

// async function test()
// {
// // create db connection
//     const db = await mongoDB.mongoDBConnection();
//     const result = await db.collection("user").find({}).toArray();
//     console.log("what is result", result);
// }

// test();

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

// parse request bodies (req.body)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// allow overriding methods in query (?_method=put)
app.use(methodOverride("_method"));

// routes
app.get("/", home.index);

app.post("/login", user.login);
app.get("/login", home.index);

// app.post("/login", )

app.listen(app.get("port"));
console.log("listening on port "+ app.get("port") +"...");