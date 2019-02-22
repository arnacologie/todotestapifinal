module.exports = (app) => {
    
    const apiPath = '/api/v1';
    const todoController = require('../controllers/todo.controller');

    app.get(`${apiPath}/todos`, todoController.getTodos);
    app.get(`${apiPath}/todos/:id`, todoController.getTodo);
    app.get(`${apiPath}/delete/:id`, todoController.deleteTodo);
    app.post(`${apiPath}/create`, todoController.createTodo);
    app.put(`${apiPath}/todos/:id`, todoController.updateTodo);
    

}