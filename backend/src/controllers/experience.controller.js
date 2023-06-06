const Experience = require('../models/Experience');
const CTRL = {};
CTRL.get = (req, res)=>{
	const profileId = req.params.profileId;
	Experience.find({profileId:profileId})
	.then(experience=>{
		res.status(200)
		.json({
			ok:true, 
			experience
		})

	})
	.catch(err=>res.status(500).json({ok:false, err}))
}
CTRL.add = async (req, res)=>{
	const profileId = req.params.profileId;
	try{
		const { companyName, jobTitle, startDate, endDate, summary, label} = req.body;
		Experience.create({
			companyName, 
			jobTitle, 
			startDate, 
			endDate, 
			summary,
			profileId,
			label
		})
		.then(createdExperience=>{
			res.status(201)
			.json({
				ok:true, 
				createdExperience
			})
		})
		.catch(err=>{
			res.status(500)
			.json({
				ok:false,
				err
			})
		})
	}
	catch(err){
		res.status(500)
		.json({
			ok:false, 
			err
		});
	}
}
module.exports = CTRL;