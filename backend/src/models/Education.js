const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EducationSchema = new Schema({
	profileId:{
		type:String, 
		required:true
	},
	degreeName:{
		type:String, 
	},
	major:{
		type:String, 
	},
	startDate:{
		type:String, 
	},
	endDate:{
		type:String,
	},
	institution:{
		type:String, 
	},
	label:{
		type:String, 
	},
});

module.exports = mongoose.model("Education", EducationSchema);
