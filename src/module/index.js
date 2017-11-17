var mongoose = require('mongoose');
var passport = require('passport');
var dbConfig = require('./../../config/database');
require('./../../config/passport')(passport);
var jwt = require('jsonwebtoken');
var router = require('express').Router();
var user = require('./user/index');

router.use('/user', user);
router.use('/debug',  function(req, res, next){
    console.log(req.get('Authorization'));
    next();
  }, function(req, res){
    res.json("debugging");
});

router.get('/book', passport.authenticate('jwt', {session:false}), function(req, res){
	
		console.log('Hello');
		res.json({status:"success"});
	
})



module.exports = router;
