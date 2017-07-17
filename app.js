const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

//PATH
app.use(express.static(path.join(__dirname, 'public')));

//VIEW ENGINE //NPM INSTALL EJS ALSO
app.set('view engine', 'ejs');

//BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//REQUIRE ROUTER
var home = require('./routers/home');
var teachers = require('./routers/teachers');
var subjects = require('./routers/subjects');
var students = require('./routers/students');

app.use(session({
  secret: 'hacktiv8',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

//ROUTE THAT DON'T NEED LOGIN
app.use('/', home);

app.use((req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    res.render('login', {
      pagetitle: 'Login Session',
      msg: 'Login first'
    })
  }
})

//ROUTER USE
app.use('/teachers', teachers);
app.use('/subjects', subjects);
app.use('/students', students);


//LISTEN PORT
app.listen(3000, function() {
  console.log('im listening on 3000');
});
