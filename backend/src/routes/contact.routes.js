const express  = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact.controller');
router.get('/:id', contactCtrl.get)
router.post('/', contactCtrl.create);
router.post('/:id', contactCtrl.update);
module.exports = router;
