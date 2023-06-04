const Profile = require("../models/Profile");
const { v4 } = require('uuid');
const CTRL = {};

CTRL.get = (req, res) => {
		const id = req.params.id;
  	console.log(`getting profile with id - ${id}`);
  	Profile.findById({_id:id})
  	.then(profiles=>res.status(200).json({ok:true, profiles}))
  	.catch(err=>res.status(500).json({ok:false, err}))
};
CTRL.getAll = (req, res) => {
		console.log(`getting all profiles`);
  	Profile.find()
  	.then(profiles=>res.status(200).json({ok:true, profiles}))
  	.catch(err=>res.status(500).json({ok:false, err}))
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
