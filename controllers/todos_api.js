var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo');
var User = require('../models/User');

//==============================================
//Route to add/save news todo to user
//==============================================
router.post('/todos/new/:userId', (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            Todo.create(req.body, (err, todo) => {
                if (err) {
                    console.log(err);
                } else {
                    user.todos.push(todo);
                    user.save();
                    res.end();
                }
            });
        }
    });
});


// ==============================================
// Route to get all user todos
// ==============================================
router.get("/todos/:userId", (req, res) => {
    User.findById(req.params.userId).populate('todos').exec((err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user.todos.length) {
                return res.end()
            } else {
                res.json(user.todos)
            }

        }
    });
});

// ==============================================
// Route to delete an article
// ==============================================
router.delete('/:todoId', (req, res) => {
    Todo.findByIdAndRemove(req.params.todoId, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.end();
        }
    });
});


module.exports = router;
