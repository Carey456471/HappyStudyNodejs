//------------------------------------------------------------
// User Model
//------------------------------------------------------------

//require db
const { MongoTimeoutError } = require("mongodb");
var mongoDB = require("../mongoDB");

exports.getUser = async function(name, password, done)
{
    // get the mongoDB connection
    const db = await mongoDB.mongoDBConnection();
    
    // execute the query
    db.collection("user").findOne({"name" : name, "password" : password}, function(err, user)
    {
        if (err) return done(err);
        done(null, user);
    });
}

exports.addUser = async function(name, password, done)
{
    // get the mongoDB connection
    const db = await mongoDB.mongoDBConnection();

    // check wheater exsit
    // to be finished
    // const result = db.collection("user").findOne({"name" : name});
    // if(result != null)
    // {
    //     console.log("error");
    //     return done("error");
    // }

    // insert new object to collection
    var obj = 
    {
        "name" : name,
        "password" : password,
    };
    
    db.collection("user").insertOne(obj, function(err, user)
    {
        if(err) return done(err);
        done(null, user);
    });
}
