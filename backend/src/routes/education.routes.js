const express  = require('express');
const router = express.Router();
const educationCtrl = require('../controllers/education.controller');
router.get('/:profileId', educationCtrl.get)
router.post('/', educationCtrl.create);
router.post('/:id', educationCtrl.update);
router.delete('/:id', educationCtrl.delete);
module.exports = router;
