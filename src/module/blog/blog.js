var jwt = require('jsonwebtoken');
var Blog = require('./blogSchema');
var userInfo = require('./../common/index');
var blog = {};
blog.save = function(req, res){
	
	var info = userInfo(req.headers.authorization);
	var newBlog = new Blog({
		user_id : info._id,
		title : req.body.title,
		slug : req.body.slug,
		description: req.body.description,
		image:{
			path: req.body.image_path,
			name: req.body.image_name
		}
	});

	newBlog.save(function(err) {
		if(err)
			return console.log(err);
		else
	 		res.json({status:"success", msg:"New blog created successfully."});
	});
}

module.exports = blog;