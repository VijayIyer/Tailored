const Projects = require('../models/Projects');
const CTRL = {};
CTRL.get = (req, res)=>{
	const profileId = req.params.profileId;
	Projects.find({profileId:profileId})
	.then(projects=>{
		res.status(200)
		.json({
			ok:true, 
			projects:projects.map(project=>{
				return ({
					id:project._id, 
					title, 
					summary, 
					startDate, 
					endDate, 
					label
				})
			})
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
	
	try{
		const { label, profileId } = req.body;
		Projects.create({
			label,
			profileId
		})
		.then(createdProject=>{
			res.status(201)
			.json({
				ok:true, 
				createdProject:{
					id:createdProject._id,
					...createdProject
				}
			})
		})
		.catch(err=>{
			console.log(err);
			res.status(500)
			.json({
				ok:false,
				err
			})
		})
	}
	catch(err){
		console.log(err);
		res.status(500)
		.json({
			ok:false, 
			err
		})
	}
}
CTRL.update = (req, res)=>{
	const id = req.params.id;
	const { title, label, startDate, endDate, summary} = req.body;
	Projects.findById(id)
	.then(project=>{
		project.title = title;
		project.label = label;
		project.startDate = startDate;
		project.endDate = endDate;
		project.summary = summary;
		project.save();
		return project;
	})
	.then(project=>{
		res.status(200)
		.json({
			ok:true, 
			project: {
				id:project._id,
				...project
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
	Projects.findByIdAndDelete({_id:id})
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