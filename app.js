const express = require('express');
const app = express();
const path = require('path');
const db = require('mongoose');
const bodyparser = require('body-parser');

const eventRoutes = require('./routes/events');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname+'/public')));
app.use(bodyparser.urlencoded({ extended : false}));

app.use(eventRoutes);


const MONGODB_URI = process.env.MONGODB_URI;
db.connect(MONGODB_URI)
.then(res => {
    console.log('database connected');
})
.catch(err => {
    console.log(err);
})

app.listen(8000,() => {
    console.log("Server started");
})