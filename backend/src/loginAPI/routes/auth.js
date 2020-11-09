const router = require('express').Router();
const express = require('express');
const User = require('../model/User');
const app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const {registerValidation, loginValidation} = require('../validation');
const bctypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', jsonParser,  async (req,res)=>{


    //validation, before creations

    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if email exists
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send("Email already exists");

    //hash password
    const salt = await bctypt.genSalt(10);
    const hashPassword = await bctypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword

    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/login', jsonParser,  async (req,res)=>{
    //validation, before creations

    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check email
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send("invalid email");

    // check password
    const validPassword = await bctypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("invalid password");

    //Create token

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

    res.header('auth-token', token).send(token);

    res.send("Login")

});

module.exports = router;