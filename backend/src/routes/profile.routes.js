const express  = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profile.controller');
router.get('/', profileCtrl.getAll);
router.get('/:id', profileCtrl.get);
router.post('/', profileCtrl.create);
module.exports = router;
