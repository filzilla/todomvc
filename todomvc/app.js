const fs = require('fs');
const path = require('path');
const express = require('express');
const application = express();

const bodyParser = require('body-parser');



application.use('/static', express.static('static'));
application.use(bodyParser.json());

application.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
});

// put routes here

application.get('/api/todos/', async(request, response) =>{

    var todos = await models.todomvc.findAll({});

    return response.json(todos);
  });


application.post('/api/todos/', async(request, response) => {

   var todoText = request.body.new-todo
 //   var todo = await models.todomvc.Create{

   // }
    
        response.json(todo);
});

application.get('/api/todos[/id]', (request, response) => {

    let id = request.params.id;
    let todo = await Todo.find({ _id: id });

    if (!todo) {
        response.status(404);
        return response.end();
    }
    return response.json(todo);
});

application.put('/api/todos[/id]', (request, response) => {

});

application.patch('/api/todos[/id]', (request, response) => {

});

application.delete('/api/todos[/id]', (request, response) => {

});




GET /api/todos/ - return a JSON array of todo items
POST /api/todos/ - post a JSON representation of a todo and have it saved. Returns the saved todo item in JSON.
GET /api/todos[/id] - get a specific todo item.
PUT /api/todos[/id] - update a todo item. Returns the modified todo item.
PATCH /api/todos[/id] - partially update a todo item. Returns the modified todo item.
DELETE /api/todos[/id] - deletes a todo item. Returns the todo item that was deleted.




application.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
