const fs = require('fs');
const path = require('path');
const express = require('express');
const application = express();
const bodyParser = require ('body-parser');
const models = require ('../models');
application.use('/static', express.static('static'));


application.use('/static', express.static('static'));
application.use(bodyParser.json());

application.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

// put routes here


application.get('/api/todos', async (request, response) =>{
    
        var todos = await models.todomvc.findAll({});

     
        return response.json(todos);
});

application.post('/api/todos/', async (request, response) =>{

        var newTodo = request.body;
        console.log(newTodo);
        var todos = await models.todomvc.create({
            title: newTodo.title,
            order: newTodo.order,
            completed: newTodo.completed
        });
   
   // return response.json(todos)
});


application.put('/api/todos/:id', async (request, response) =>{

    var id = request.params.id;
    var changedTodo= request.body;
    var todo = await models.todomvc.update({

            title: changedTodo.title,
            order: changedTodo.order,
            completed: changedTodo.completed
        },

        {where: {
            id: id
        }


    });

});

application.get('/api/todos/:id', async (request, response) =>{

     console.log(request.params.id);
     var id = parseInt(request.params.id);
     console.log(id);
     var todo = await models.todomvc.findOne({
         where: {
             id: id
         }
         });
   
    return response.json(todo);
});

application.delete('/api/todos/:id', async (request, response) =>{
    
        var todoToDelete = request.params.id;
        var todos = models.todomvc.destroy({
            where: {
                    id: todoToDelete
                    }

    });

        return response.json(todos);

    });

application.listen(3000, function () {
    console.log('Express running on http://localhost:3000')
    });
