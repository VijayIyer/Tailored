const Projects = require('../models/Projects');
const CTRL = {};
CTRL.get = (req, res)=>{
	const profileId = req.params.profileId;
	Projects.find({profileId:profileId})
	.then(projects=>{
		res.status(200)
		.json({
			ok:true, 
			projects
		})
	})
	.catch(err=>{
		res.status(500)
		.json({
			ok:false, 
			err
		})
	})
};
CTRL.add = (req, res)=>{
	const profileId = req.params.profileId;
	try{
		const { title, summary, startDate, endDate, label} = req.body;
		Projects.create({
			title, 
			startDate, 
			endDate, 
			summary,
			label,
			profileId
		})
		.then(createdProject=>{
			res.status(201)
			.json({
				ok:true, 
				createdProject
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
		})
	}
}
module.exports = CTRL;