const Profile = require("../models/Profile");
const { v4 } = require('uuid');
const CTRL = {};

CTRL.get = (req, res) => {
		const id = req.params.id;
  	console.log(`getting profile with id - ${id}`);
  	Profile.findById({_id:id})
  	.then(profile=>res.status(200).json({ok:true, profile}))
  	.catch(err=>res.status(500).json({ok:false, err}))
};
CTRL.getAll = (req, res) => {
		console.log(`getting all profiles`);
  	Profile.find()
  	.then(profiles=>res.status(200).json({ok:true, profiles}))
  	.catch(err=>res.status(500).json({ok:false, err}))
};


CTRL.create = (req, res)=>{
	let label;
	Profile.countDocuments({})
	.then(count=>{
		console.log(`number of profiles - ${count}`)
		label = `Profile #${count+1}`;
		Profile.create({
			label:label,
			uniqueId:v4()
			})
			.then((newProfile)=>{
				res.status(201).json({
					ok:true, 
					newProfile
				})
			})
			.catch(err =>{
				res.status(500).json({
					Ok:false, 
					err
				});
			})
	})
	.catch(err=>{
		res.status(500)
		.json({
			ok:false,
			err
		})
	});
};

module.exports = CTRL;
