const Skill = require('../models/Skills');
const CTRL = {};
CTRL.add = async (req, res) => {
	const profileId = req.params.profileId;
	let skills = req.body.skills;
	try{

		let result = await Skill.findOne({profileId:profileId});
		if(!result){
				let newSkills = new Skill({
					name:skills.map(skill=>skill.text),
					profileId:profileId
				})
				newSkills.save();	
				res.status(201).json({ok:true, skills: newSkills.name});	
			}
		else{
				result.name = skills.map(skill=>skill.text);
				result.save();
				res.status(200).json({ok:true, skills: result.name});
			}
	}
	catch(err){
		console.log(err);
		res.status(500).json({ok:false, err})
	}
	
}
CTRL.get = (req, res) => {
	console.log('getting skills');
	const profileId = req.params.profileId;
	Skill.findOne({profileId:profileId})
	.then(skill=>{ 
		console.log(skill);
		res.status(200).json({
			ok:true, 
			skills:skill.name
		})
	})
	.catch(err=>res.status(500).json({ok:false, err}))
}
module.exports = CTRL;