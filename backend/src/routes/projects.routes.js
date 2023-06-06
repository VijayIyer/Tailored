const projectsController = require('../controllers/projects.controller');
const express = require('express');
const router = express.Router();
router.get('/:profileId', projectsController.get);
router.post('/', projectsController.add);
router.post('/:id', projectsController.update);
router.delete('/:id', projectsController.delete);
module.exports = router;