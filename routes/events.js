const express = require('express');

const router = express.Router();
const eventController = require('../controllers/events');

router.get('/eventregister',eventController.getevent);

router.post('/eventregister',eventController.postevent);

router.get('/',eventController.getHome);

module.exports = router;