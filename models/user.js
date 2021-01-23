//------------------------------------------------------------
// User Model
//------------------------------------------------------------

//require db
var db = require("../db");

var userDBO;
db.client.connect(function(err, db)
{
    if(err) throw err
    console.log("db connect success.");
    var dbo = db.db("DB");
    userDBO = dbo;
});

exports.getUser = function(name, password, done)
{
    db.client.connect(function(err)
    {
        if(err) throw err;
        
    });
    

    userDBO.findOne({"name" : name, "password" : password}, function(err, user)
    {
        if(err)
            return done(err);
        done(null, user);    
    });
}
