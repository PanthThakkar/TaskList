var express = require('express');
var toDoController = require('./Controllers/ToDoController')

var app = express();

app.set('view engine', 'ejs')

//For static files
app.use(express.static('./public'));

//Fire controllers
toDoController(app);

app.listen(3000);
console.log('You are listening to port 3000');
