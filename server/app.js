require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors")
var fileUpload = require('express-fileupload')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

mongoose.connect(process.env.DB_MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload())
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/item', apiRouter);

module.exports = app;