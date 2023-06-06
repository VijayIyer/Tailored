const Experience = require('../models/Experience');
const CTRL = {};
CTRL.get = (req, res)=>{
	const profileId = req.params.profileId;
	Experience.find({profileId:profileId})
	.then(experiences=>{
		res.status(200)
		.json({
			ok:true, 
			experiences:experiences.map(experience=>{
				return (
					{
						id:experience._id, 
						jobTitle, 
						companyName, 
						startDate, 
						endDate, 
						summary
					})
				})
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
				createdExperience:{
					id:createdExperience._id, 
					companyName, 
					jobTitle, 
					startDate, 
					endDate, 
					summary, 
					label
				}
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