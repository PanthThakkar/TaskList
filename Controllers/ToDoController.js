var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//To Connect to the database use line 6:
//Also replace url with the copied cloud database
//mongoose.connect('<url>');

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

//var data = [{item: 'Get Milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(request, response){
        Todo.find({}, function (err, data){
            if(err){
                throw err;
            }
            response.render('todo', {todos: data});
        });
    });
    app.post('/todo', urlEncodedParser, function(request, response){
        var newToDo = Todo(request.body).save(function (err, data){
            if(err){
                throw err;
            }
            response.json(data);
        });
    });
    app.delete('/todo/:item', function(request, response){
        Todo.find({item: request.params.item.replace(/\-/g, " ")}).remove(function (err, data){
            if(err){
                throw err;
            }
            response.json(data);
        });
    });
};