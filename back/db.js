var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/back');

var userSchema = new mongoose.Schema({
    username: String,
    coin: String,
    type: String,
    price: Number,
    amount: Number

}, {collection:'usercollection'});

 module.exports = {Mongoose: mongoose, UserSchema:userSchema}