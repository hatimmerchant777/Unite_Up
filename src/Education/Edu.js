const mongoose = require('mongoose');
const schema = mongoose.Schema({
    _id:mongoose.ObjectId,
    id:Number,
    name:String,
    Address:String,
    key_issue:String,
    City:String,
    State:String,
    Telephone:Number,
    ["Mobile No"]:Number,
    ["Website Url"]:String,
    ["Email No"]:String,
})

module.exports = mongoose.model('Edu',schema);