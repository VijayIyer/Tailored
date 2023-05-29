const Profile = require("../models/Profile");
const { v4 } = require('uuid');
const CTRL = {};

CTRL.get = (req, res) => {
  res.send(`getting profile with id ${req.params.id}`);
};


CTRL.create = (req, res)=>{
	const label = req.body.label;
	Profile.create({
		label:label,
		uniqueId:v4()
	})
	.then((newProfile)=>{
		res.status(201).json({
			ok:true, 
			id:newProfile.uniqueId
		})
	})
	.catch(err =>{
		res.status(500).json({
			Ok:false, 
			err
		});
	})
	
};

module.exports = CTRL;
