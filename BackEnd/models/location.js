const mongoose = require('mongoose');
const Device = require('./device');
const Schema = mongoose.Schema;

const locationSchema = new Schema({

name: {
    type: String,
    required: true
},
address:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
},
device:[String]

})

const Location = mongoose.model("location",locationSchema);
module.exports = Location;