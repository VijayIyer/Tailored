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
					title:project.title, 
					summary:project.summary, 
					startDate:project.startDate, 
					endDate:project.endDate, 
					label:project.label
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
					title:createdProject.title, 
					summary:createdProject.summary, 
					startDate:createdProject.startDate, 
					endDate:createdProject.endDate, 
					label:createdProject.label
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
	.then(updatedProject=>{
		res.status(200)
		.json({
			ok:true, 
			project: {
				id:updatedProject._id, 
				title:updatedProject.title, 
				summary:updatedProject.summary, 
				startDate:updatedProject.startDate, 
				endDate:updatedProject.endDate, 
				label:updatedProject.label
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