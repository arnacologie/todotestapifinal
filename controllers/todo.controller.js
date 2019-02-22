const Todo = require('../models/todo.model');

exports.createTodo = function(req, res){

    let todo = new Todo(req.body);
    todo.save((err) => {
        if(err){
            console.log(err);
        }else{
            console.log('Todo created :');
        }
        res.send(`Todo created ! \n\n${todo}`);
    });
}

exports.getTodos = function(req, res){
    Todo.find(function(err, todos){
        if(err){
            console.log(err);
        }
        res.json(todos);
    });
}

exports.getTodo = function(req, res){
    let id = req.params.id;
    Todo.findById(id, (err, todo) => {
        res.json(todo)
    })
}

exports.updateTodo = function(req, res){
    Todo.findById(req.params.id, (err, todo) => {
        if (!todo)
            res.send('Error getting the todo!');
        else {
            if(err){
                tatus(400).send("Error when updating the todo");
            }else{
                todo.name = req.body.name;
                todo.save().then( todo => {
                res.json('Todo updated successfully');
            });
        }
        }
    });
}

exports.deleteTodo = function(req, res){
    Todo.findByIdAndDelete({_id: req.params.id}, (err, todo) => {
        if(err) res.json(err);
        else res.json('Todo successfully removed');
    } )
}