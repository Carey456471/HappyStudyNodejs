//------------------------------------------------------------
// User Model
//------------------------------------------------------------

//require db
var mongoDB = require("../mongoDB");

// const client = db.get();

exports.getUser = async function(name, password, done)
{
    //var dbo = client.db("DB");
    // client.db("DB").collcetion("user").findOne({"name" : name, "password" : password}, function(err, user)
    // {
    //     if(err)
    //         return done(err);
    //     done(null, user);    
    // });

    const db = await mongoDB.mongoDBConnection();
    const result = await db.collection("user").find({}).toArray();
    console.log("what is result", result);

    // console.log(name);
    // console.log(password);
}
