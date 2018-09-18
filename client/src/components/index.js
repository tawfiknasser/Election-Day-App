const express = require('express');

const router = express.Router();

router.get('/', require('../controllers/home').get);
router.get('/Stop', require('../controllers/home').get);
router.get('/Continue', require('../controllers/home').get);
router.get('/Go', require('../controllers/home').get);
router.post('/add_Stop', require('../controllers/home').post);

module.exports = router;
