const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
	profileId:{
		type:String, 
		required:true
	},
	name:{
		type:String, 
	},
	email:{
		type:String,
	},
	phone:{
		type:String
	},
	location:{
		type:String
	}
});

module.exports = mongoose.model("Contact", ContactSchema);
