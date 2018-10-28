//server.js
//manages our database requests!

// import express from 'express';
// import bodyParser from 'body-parser';
// import logger from 'morgan';
// import mongoose from 'mongoose';
// import { getSecret } from './secrets';
// import Comment from './models/comment';
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var DBURI = require('./secrets');
var Selection = require('./models/selection');

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;
mongoose.connect(DBURI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/responses', (req, res) => {
  Selection.find((err, responses) => {
    if (err) return res.json({ success: false, error: err});
    return res.json({ success: true, data: responses });
  });
});
router.post('/responses', (req, res) => {
  const response = new Selection();

  if(!req.body.selection){
    return res.json({
      success: false,
      error: 'you must provide a response'
    });
  }
  response.selection = req.body.selection;
  response.save(err => {
    if (err) return res.json({ success: false, error: err});
    return res.json({ success: true});
  });
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
