const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
app.use(cors());
dotenv.config();



const authRoute = require('./routes/auth');
const tradesRoute = require('./routes/trades.js');



mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true } ,
    ()=> console.log('moongo runing')
); 

app.use('/api/user', authRoute);
app.use('/api/trades', tradesRoute);


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(morgan('dev'));
app.use(helmet())


app.listen(3003, ()=> console.log("Server up"));


module.exports = app;

