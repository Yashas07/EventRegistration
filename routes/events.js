const express = require('express');

const router = express.Router();


router.get('/eventregister',(req,res,next) => {
    res.render('eventregister');
})
router.get('/',(req,res,next) => {
    res.render('events');
})

module.exports = router;