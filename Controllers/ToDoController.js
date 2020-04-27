var bodyParser = require('body-parser');

var data = [{item: 'Get Milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(request, response){
        response.render('todo', {todos: data});
    });
    app.post('/todo', urlEncodedParser, function(request, response){
        console.log(request.body, " ", data);
        data.push(request.body);
        response.render('todo', {todos: data});
        response.json({todos: data});
    });
    app.delete('/todo:item', function(request, response){
        
    });
};