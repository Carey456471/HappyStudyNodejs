//------------------------------------------------------------
// home controller
//------------------------------------------------------------

exports.index = function(req, res, next)
{
    res.render("pages/index", {title : "Home Page", error : true});
}