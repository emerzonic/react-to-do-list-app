var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo');
var User = require('../models/User');
var key = process.env.REACT_APP_NYT_KEY;

const todo = 'todo here';
//==============================================
//Route to add/save news article to user
//==============================================
router.post('/todos/:userId', (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            Article.create(req.body, (err, article) => {
                if (err) {
                    console.log(err);
                } else {
                    user.todos.push(article);
                    user.save();
                    res.end();
                }
            });
        }
    });
});


// ==============================================
// Route to get all user saved todos
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
router.delete('/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.end();
        }
    });
});


module.exports = router;
