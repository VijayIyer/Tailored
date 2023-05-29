const Contact = require("../models/Contact");
const CTRL = {};

CTRL.get = (req, res) => {
  res.send(`getting contact with id ${req.params.id} for profile ${req.params.id}`);
};


CTRL.create = (req, res)=>{
	console.log(`creating new contact`);
	Contact.create({profileId:req.body.profileId})
	.then((newContact)=>{
		res.status(201).json({
			ok:true, 
			id:newContact.id
		})
	})
	.catch(err =>{
		res.status(500).json({
			Ok:false, 
			err
		});
	})
	
};
CTRL.update = (req, res)=>{
	//console.log(`updating contact ${JSON.stringify(req.params.id)}`);
	Contact.findOne({_id:req.params.id})
	.then(contact=>{
		console.log(contact);
		contact.name=req.body.name;
		contact.phone = req.body.phone;
		contact.location = req.body.location;
		contact.email = req.body.email;
		return contact;
	})
	.then((updatedContact)=>{
		console.log(updatedContact);
		res.status(200).json({
			ok:true, 
			msg:'updated contact successfully',
			id:updatedContact.id
		})
	})
	.catch(err =>{
		res.status(500).json({
			Ok:false, 
			err
		});
	})
	
};

module.exports = CTRL;
