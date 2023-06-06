const model = require('../models/Experience');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
	companyName:{
		type:String
	}, 
	jobTitle:{
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
module.exports = mongoose.model('Experience', ExperienceSchema);