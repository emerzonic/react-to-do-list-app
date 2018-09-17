var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  'title': { type: String },
  'notes': { type: String },
  'startDate': { type: Date},
  'dueDate': { type: Date},
  'status': { type: Boolean, default: false },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now },
});


module.exports = mongoose.model('Todo', todoSchema);