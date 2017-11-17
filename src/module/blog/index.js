var blog = require('./blog');
var routes = require('express').Router();

routes.post('/add',blog.save);

module.exports = routes;
