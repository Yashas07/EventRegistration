const eventModel = require('../models/events');

exports.postevent = (req,res,next) => {
    const eventname = req.body.eventname;
    const name = req.body.administrator;
    const email = req.body.email;
    const city = req.body.city;
    const date = req.body.date;
    const time = req.body.time;
    const Event = new eventModel({
        eventname : eventname,
        name : name,
        email : email,
        city : city,
        date : date,
        time : time
    })
    
    Event.save()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

    res.redirect('/');
}

exports.getevent = (req,res,next) => {
    res.render('eventregister');
}

exports.getHome = (req,res,next) => {
    eventModel.find()
    .then(events => {
        console.log(events);
        res.render('events',{
            events : events
        });
    })
    .catch(err => {
        console.log(err);
    })
    
}