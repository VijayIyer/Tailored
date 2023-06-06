const Experience = require('../models/Experience');
const CTRL = {};
CTRL.get = (req, res)=>{
	const profileId = req.params.profileId;
	Experience.find({profileId:profileId})
	.then(savedExperiences=>{
		let experiences = savedExperiences.map(experience=>{
				return (
					{
						id:experience._id, 
						label:experience.label,
						jobTitle:experience.jobTitle, 
						companyName:experience.companyName, 
						startDate:experience.startDate, 
						endDate:experience.endDate, 
						summary:experience.summary
					})
				})
		console.log(JSON.stringify(experiences));
		return res.status(200)
		.json({
			ok:true, 
			experiences
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
					label:createdExperience.label, 
					jobTitle:createdExperience.jobTitle, 
					companyName:createdExperience.companyName, 
					summary:createdExperience.summary, 
					startDate:createdExperience.startDate,
					endDate:createdExperience.endDate
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
					label:updatedExperience.label, 
					jobTitle:updatedExperience.jobTitle, 
					companyName:updatedExperience.companyName, 
					summary:updatedExperience.summary, 
					startDate:updatedExperience.startDate,
					endDate:updatedExperience.endDate
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