//------------------------------------------------------------
// User Controller
//------------------------------------------------------------

var userModel = require("../models/user");

exports.login = function(req, res, next)
{
    userModel.getUser(req.body.name, req.body.password, function(err, user)
    {
        //console.log(user);
        res.render("pages/index", {title : "AAA", error : true});
    });
}