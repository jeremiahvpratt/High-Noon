var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const selectionSchema = new Schema({
  selection: String,
}, { timestamps: true});

module.exports= mongoose.model('Selection', selectionSchema);
