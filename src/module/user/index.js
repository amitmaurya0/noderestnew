var user = require('./user');
const routes = require('express').Router();

routes.post('/signup', user.signup);
routes.post('/login', user.login);
routes.get('/', (req, res) => {
    res.send('Page is under construction.'); 
});



module.exports = routes;