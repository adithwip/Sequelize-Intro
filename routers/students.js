"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models');

router.use((req, res, next) => {
  if (req.session.role == 'headmaster' || req.session.role == 'teacher' || req.session.role == 'academic') {
    next()
  } else {
    res.send('Login lah sebagai headmaster, academic, atau teacher')
  }
})

router.get('/', (req, res) => {
  model.Student.findAll({
    order: [['first_name', 'ASC']]
  }).then(function(students) {
    res.render('students', {
      data_students: students,
      pagetitle: 'Students Data',
      h1: 'STUDENTS DATA',
      dropdownmenu: 'Add Students',
      linkdropdown: '/students/add',
      session: req.session.user
    });
  });
});

router.get('/add', (req, res) => {
  res.render('students_add', {
    msg: null
  });
});

router.get('/addsubject/:id', (req, res) => {
  model.Student.findById(req.params.id)
  .then(data_students => {
    model.Subject.findAll()
    .then(data_subjects => {
      res.render('students_addsubject', {
        data_students : data_students,
        data_subjects : data_subjects
      })
    })
  })
});

router.post('/addsubject/:id', (req, res) => {
  model.StudentSubject.create({
    StudentId: req.params.id,
    SubjectId: req.body.SubjectId
  })
  .then(() => {
    res.redirect('/students')
  })
})

router.post('/add/', (req, res) => {
  console.log(req.body);
  model.Student.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      jurusan: req.body.jurusan,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(function(rows) {
      res.redirect('/students');
    })
    .catch(function(err) {
      console.log(err);
      res.render('students_add', {
        msg: err
      });
    })
});

router.get('/edit/:id', (req, res) => {
  model.Student.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(function(studentsByID) {
      res.render('students_edit', {
        data_studentsByID: studentsByID,
        msg: null
      });
    })
    .catch(function(err) {
      console.log(err);
      res.render('students_edit', {
        msg: err
      });
    })
});

router.post('/edit/:id', (req, res) => {
  model.Student.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      jurusan: req.body.jurusan,
      updatedAt: new Date()
    }, {
      where: {
        id: req.body.id
      }
    })
    .then(function(rows) {
      res.redirect('/students')
    })
});

router.get('/delete/:id', (req, res) => {
  model.Student.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(rows) {
      res.redirect('/students')
    })
})

module.exports = router;
