var data = [{item: 'Get Milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}]

module.exports = function(app){
    app.get('/todo', function(request, response){
        response.render('todo', {todos: data});
    });
    app.post('/todo', function(request, response){
        
    });
    app.delete('/todo', function(request, response){
        
    });
};