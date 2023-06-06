const projectsController = require('../controllers/projects.controller');
const express = require('express');
const router = express.Router();
router.get('/:profileId', projectsController.get);
router.post('/:profileId', projectsController.add);
module.exports = router;