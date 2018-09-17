var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  'title': { type: String },
  'notes': { type: String },
  'startDate': { type: Date},
  'dueDate': { type: Date},
  'status': { type: String, default: 'Pending' },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now },
});


module.exports = mongoose.model('Todo', TodoSchema);