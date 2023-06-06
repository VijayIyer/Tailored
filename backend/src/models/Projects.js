const model = require('../models/Projects');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	label:{
		type:String
	}, 
	title:{
		type:String
	}, 
	startDate:{
		type:String
	}, 
	endDate:{
		type:String
	}, 
	summary:{
		type:String
	},
	profileId:{
		type:String, 
		required:true
	}
})
module.exports = mongoose.model('Project', ProjectSchema);