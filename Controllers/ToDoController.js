module.exports = function(app){
    app.get('/todo', function(request, response){
        response.render('todo');
    });
    app.post('/todo', function(request, response){
        
    });
    app.delete('/todo', function(request, response){
        
    });
};