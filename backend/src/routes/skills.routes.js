const skillsController = require('../controllers/skills.controller.js');
const express = require('express');
const router = express.Router();
router.get('/:profileId', skillsController.get);
router.post('/:profileId', skillsController.add);
module.exports = router;