"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res) => {
  model.Student.findAll().then(function(students) {
    res.render('students', {data_students : students});
  });
});

router.get('/add', (req, res) => {
  res.render('students_add');
});

router.post('/add/', (req, res) => {
  console.log(req.body);
  model.Student.create({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    jurusan : req.body.jurusan,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(function(rows) {
    res.redirect('/students');
  })
  .catch(function(err) {
    console.log(err);
    res.render('students_add', {msg : err});
  })
});

router.get('/edit/:id', (req, res) => {
  model.Student.findAll({
    where : {
      id : req.params.id
    }
  })
  .then(function(studentsByID) {
    res.render('students_edit', {data_studentsByID : studentsByID});
  })
  .catch(function(err) {
    console.log(err);
    res.render('students_edit', {msg : err});
  })
});

router.post('/edit/:id', (req, res) => {
  model.Student.update({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    jurusan : req.body.jurusan,
    updatedAt: new Date()
  }, {
    where : {
      id : req.body.id
    }
  })
  .then(function(rows) {
    res.redirect('/students')
  })
});

router.get('/delete/:id', (req, res) => {
  model.Student.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(function(rows) {
    res.redirect('/students')
  })
})

module.exports = router;
