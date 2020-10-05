const { Timestamp } = require('bson');
const { timeStamp } = require('console');
const db = require('mongoose');

const Schema = db.Schema;
const Event = new Schema({
    eventname : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    }

})

module.exports = db.model('event',Event);