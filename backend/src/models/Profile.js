const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	label:{
		type:String, 
		required:true
	},
	uniqueId:{
		type:String,
		required:true
	}
});

module.exports = mongoose.model("Profile", ProfileSchema);
