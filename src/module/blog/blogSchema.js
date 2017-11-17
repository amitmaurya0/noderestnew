var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
	user_id: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image:{
		path: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		}
	},
	timestamp:{
		type: Date,
		default: Date.now
	}

});

// BookSchema.pre('save', function(next){
// 	var book = this;

// });

module.exports = mongoose.model('blogs', BlogSchema);