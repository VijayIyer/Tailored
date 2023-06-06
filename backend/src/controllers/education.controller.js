const Education = require("../models/Education");
const CTRL = {};
CTRL.get = (req, res)=>{
	const profileId = req.params.profileId;
	Education.find({profileId:profileId})
	.then(education=>{
		res.status(200)
		.json({
			ok:true, 
			education: education.map(education=>
				{ 
					return ({
						id:education._id, 
						degreeName:education.degreeName, 
						label:education.label, 
						institution:education.institution, 
						startDate:education.startDate, 
						endDate: education.endDate,
						major: education.major
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
}

CTRL.create = (req, res)=>{
	Education.create({profileId:req.body.profileId})
	.then(newEducation=>{
		res.status(201)
		.json({
			ok:true, 
			createdEducation:{
				id:newEducation._id, 
				...newEducation
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

CTRL.update = (req, res)=>{
	console.log(req.body);
	Education.findById({_id:req.params.id})
	.then(education=>{
		education.institution = req.body.institution;
		education.major = req.body.major
		education.startDate = req.body.startDate;
		education.endDate = req.body.endDate;
		education.degreeName = req.body.degreeName;
		education.label = req.body.label;
		education.save();
		return education;
	})
	.then(updatedEducation =>{
		return res.status(200)
		.json({
			ok:true, 
			id:updatedEducation._id
		})
	})
	.catch(err=>res.status(500).json({ok:false, err}))
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

module.exports = CTRL