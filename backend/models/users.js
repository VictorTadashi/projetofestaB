const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
name : { type : String },
email : {type : String, required : true },
password : {type : String, required: true}
});

const User = mongoose.model

module.exports = User;
