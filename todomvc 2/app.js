const fs = require('fs');
const path = require('path');
const express = require('express');
const application = express();
const bodyParser = require ('body-parser');

application.use('/static', express.static('static'));


application.use('/static', express.static('static'));
application.use(bodyParser.json());

application.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

// put routes here


application.get('api/todos/', async (request, response) =>{

    var todos = await model.todomvc.findAll({});

    return response.json(todos);
});

application.post('/api/todos/', async (request, response) =>{

    var newTodo = response.body.new-todo;

    var todos = await model.todomvc.create({
        title: newTodo,
        order: 1,
        completed: false
});

    return response.json(todos)
});


application.put('/api/todos/:id', async (request, response) =>{

    var id = request.body.id;
    var todo = await model.todomvc.findOne
})

application.get('/api/todos/:id', async (request, response) =>{

    var id = parseInt(request.body.id);

    var todo = await model.todomvc.findOne({
        where: {
            id: id
        }
    });

    return response.json(todo);
});

application.delete('/api/todos/:id', async (request, response) =>{

    var todoToDelete = request.body.id;
    var todos = model.todomvc.destroy({
        where: {
            id: todoToDelete
        }

    });
    return response.json(todos);

});

application.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
