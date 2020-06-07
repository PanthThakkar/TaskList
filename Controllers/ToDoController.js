var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var data = [{item: 'Get Milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(request, response){
        response.render('todo', {todos: data});
    });
    app.post('/todo', urlEncodedParser, function(request, response){
        data.push(request.body);
        response.json(data);

    });
    app.delete('/todo/:item', function(request, response){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== request.params.item;
        });
        response.json(data);
    });
};