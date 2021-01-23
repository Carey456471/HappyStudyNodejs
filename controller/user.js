//------------------------------------------------------------
// User Controller
//------------------------------------------------------------

var userModel = require("../models/user");

exports.login = function(req, res, next)
{
    userModel.getUser(req.body.name, req.body.password, function(err, user)
    {
        //console.log(user);
        if(user == null)
        {
            res.render("pages/index", {title : "Home Page", error : true});
        }
        else
        {
            res.render("pages/index", {title : user.name, error : false});
        }

    });
}

exports.signup = function(req, res, next)
{
    console.log("add new user");
    userModel.addUser(req.body.name, req.body.psw, function(err, user)
    {

        console.log("add new user");
        if(user == null)
        {
            console.log("add new user failed");
        }
        else
        {
            console.log(user);
        }
    });
}