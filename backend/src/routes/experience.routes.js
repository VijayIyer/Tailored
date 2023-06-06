const experienceController = require('../controllers/experience.controller');
const express = require('express');
const router = express.Router();
router.get('/:profileId', experienceController.get);
router.post('/:profileId', experienceController.add);
module.exports = router;