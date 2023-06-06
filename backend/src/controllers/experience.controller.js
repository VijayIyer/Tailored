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
CTRL.add = (req, res)=>{
	try{
		const { profileId, label} = req.body;
		Experience.create({
			profileId,
			label
		})
		.then(createdExperience=>{
			res.status(201)
			.json({
				ok:true, 
				createdExperience:{
					id:createdExperience._id, 
					profileId,  
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
CTRL.update = (req, res)=>{
	const id = req.params.id;
	// console.log(`experience id - ${id}`);
	const { companyName, jobTitle, startDate, endDate, summary, label} = req.body;
	Experience.findById(id)
	.then(experience=>{
		console.log(JSON.stringify(experience));
		experience.companyName = companyName;
		experience.jobTitle = jobTitle;
		experience.startDate = startDate;
		experience.endDate = endDate;
		experience.summary = summary;
		experience.label = label;
		experience.save();
		return experience;
	})
	.then(updatedExperience=>{
		res.status(200)
		.json({
			ok:true, 
			experience: {
				id:updatedExperience._id,
				...updatedExperience
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
CTRL.delete = (req, res)=>{
	const id = req.params.id;
	Education.findByIdAndDelete({_id:id})
	.then(()=>{
		res.status(200)
		.json({
			ok:true
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
module.exports = CTRL;