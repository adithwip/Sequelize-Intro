const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//PATH
app.use(express.static(path.join(__dirname, 'public')));

//VIEW ENGINE //NPM INSTALL EJS ALSO
app.set('view engine', 'ejs');

//REQUIRE ROUTER
var home = require('./routers/home');
var teachers = require('./routers/teachers');
var subjects = require('./routers/subjects');
var students = require('./routers/students');


//ROUTER USE
app.use('/', home);
app.use('/teachers', teachers);
app.use('/subjects', subjects);
app.use('/students', students);


//LISTEN PORT
app.listen(3000, function() {
  console.log('im listening on 3000');
});
