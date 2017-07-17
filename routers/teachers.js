"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models');

router.use((req, res, next) => {
  if (req.session.role == 'headmaster') {
    next()
  } else {
    res.send('Login lah sebagai headmaster')
  }
})

router.get('/', (req, res) => {
  model.Teacher.findAll({
    include : [model.Subject],
    order: [['first_name', 'ASC']]
  })
  .then(function(teachers) {
    console.log(teachers);
    res.render('teachers', {
      data_teachers : teachers,
      pagetitle: 'Teachers Data',
      h1: 'TEACHERS DATA',
      dropdownmenu: 'Add Teacher',
      linkdropdown: '/teachers/add',
      session: req.session.user
    });
  });
});

// router.get('/add', (req, res) => {
//   res.render('students_add', {msg : null});
// });

router.get('/add', (req, res) => {
  model.Subject.findAll()
  .then(subjects => {
    res.render('teachers_add', {
      data_subjects: subjects,
      msg : null
    })
  })
});

router.post('/add', (req, res) => {
  model.Teacher.create({
    first_name : req.body.first_name || 0,
    last_name : req.body.last_name || 0,
    email : req.body.email || 0,
    SubjectId : req.body.SubjectId || 0
  })
  .then(success => {
    res.redirect('/teachers')
  })
})

router.get('/edit/:id', (req, res) => {
  let parsingID = req.params.id.split('_');

  model.Teacher.findById(parsingID[0])
  .then(data_teachers => {
    model.Subject.findAll({
      where : {
        id : {
          $ne: parsingID[1]
        }
      }
    })
    .then(data_subjects => {
      model.Subject.findById(parsingID[1])
      .then(data_subjectsDefault => {
        res.render('teachers_edit', {
          data_teachers : data_teachers,
          data_subjects : data_subjects,
          data_subjectsDefault : data_subjectsDefault
        })
      })
    })
  })
})



router.post('/edit/:id', (req, res) => {
  model.Teacher.update({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    SubjectId : req.body.SubjectId,
    updatedAt: new Date()
  }, {
    where : {
      id : req.body.id
    }
  })
  .then(function(rows) {
    res.redirect('/teachers')
  })
});

router.get('/delete/:id', (req, res) => {
  model.Teacher.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(function(rows) {
    res.redirect('/teachers')
  })
})

module.exports = router;


// model.Teacher.findAll()
// .then(function(teachers) {
//   res.render('teachers', {data_teachers : teachers});
// });

// model.Teacher.findAll()
// .then(teachers => {
//   model.Subject.findAll()
//   .then(subjects => {
//     res.render('teachers', {
//       data_teachers : teachers,
//       data_subjects : subjects
//     })
//   })
// })
