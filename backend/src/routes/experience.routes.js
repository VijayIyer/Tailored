const experienceController = require('../controllers/experience.controller');
const express = require('express');
const router = express.Router();
router.get('/:profileId', experienceController.get);
router.post('/', experienceController.add);
router.post('/:id', experienceController.update);
router.delete('/:id', experienceController.delete);
module.exports = router;