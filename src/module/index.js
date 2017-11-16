var mongoose = require('mongoose');
var passport = require('passport');
var dbConfig = require('./../../config/database');
//require('./../../config/passport')(passport);
var jwt = require('jsonwebtoken');
var router = require('express').Router();
var user = require('./user/index');

router.use('/user', user);

module.exports = router;
