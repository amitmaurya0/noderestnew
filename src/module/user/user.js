var User = require('./userSchema');
var user = {};
user.signup = function(req, res){
	var u = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.name,
    });

    u.save(function(err) {
        if (err)
           throw err;
        else 
           res.send("user created successfully.")
    });
}

module.exports = user;
