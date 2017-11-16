var jwt = require('jsonwebtoken');
var config = require('./../../../config/database');
var User = require('./userSchema');
var user = {};
user.signup = function(req, res){
	var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password,
    });
     User.findOne({email: req.body.email}, function(err, users){
         if(users){
            res.status(401).json({status:false, msg:"email is already exist"});
        }else{
            newUser.save(function(err) {
                if (err)
                   return console.log(err);
                else 
                   res.send("user created successfully.")
            });
        }
     });
  
}

user.login = function(req, res){
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email: email}, function(err, us){
        if(err)
            throw err;
        
        if(!us){
            res.status(401).json({status:false, msg:"Username or password is incorrect - email."});
        }else{
            us.comparePassword(password, function(err, isMatch){

                if(isMatch && !err){
                    var forToken = {_id: us._id, name: us.name, password: us.password, email: us.email, phone: us.phone, username: us.username }
                    var token = jwt.sign(forToken, config.secret);
                    res.json({status:true, token:'JWT '+token});
                }else{
                    res.status(401).json({status:false, msg:"Username or password is incorrect - password."});
                }
            });
        }

    });
}

module.exports = user;
