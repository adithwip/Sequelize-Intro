"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models');
const helper = require('../helpers/scoreToText');

router.get('/', (req, res) => {
  model.Subject.findAll({
    include: [model.Teacher]
  })
  .then(data_subjects_teachers => {
    res.render('subjects', {
      data_subjects : data_subjects_teachers,
      pagetitle: 'Subjects Data',
      h1: 'SUBJECTS DATA',
      dropdownmenu: 'Add Subjects to Students',
      linkdropdown: '/students'
    })
    // res.send(data_subjects_teachers);
  })
});


router.get('/:id/enrolledstudents', (req, res) => {

  model.Subject.findById(req.params.id)
  .then(subject => {
    model.StudentSubject.findAll({
      order: [['Student', 'first_name', 'ASC']],
      where: {
        SubjectId: req.params.id
      },
      include: [model.Student]
    })
    .then(StuSub => {
      // console.log(StuSub);
      StuSub = helper(StuSub);
      console.log(StuSub);
      res.render('subjects_enrolledstudents', {
        title_subject : subject,
        data_students: StuSub
      });
      // res.send(StuSub);
    })
  })

  router.get('/givescore/:idst/:idsb', (req, res) => {
    model.Student.findAll({
      where: {
        id: req.params.idst
      }
    })
    .then(data_students => {
      model.Subject.findAll({
        where: {
          id: req.params.idsb
        }
      })
      .then(data_subjects => {
        res.render('subjects_givescore', {
          data_students: data_students,
          data_subjects: data_subjects
        })
      })
    })
  })

  router.post('/givescore/:idst/:idsb', (req, res) => {
    model.StudentSubject.update({
      score: req.body.score
    }, {
      where: {
        StudentId: req.params.idst
      }
    })
    .then(() => {
      res.redirect(`/subjects/${req.params.idsb}/enrolledstudents`)
    })
  })

  // model.StudentSubject.findAll({
  //   where: {
  //     SubjectId: req.params.id
  //   },
  //   include: [{ all: true }]
  // })
  // .then(result => {
  //   res.render('test', {data: result})
  // })

})

module.exports = router;



// model.Subject.findAll()
// .then(function(subjects) {
//   res.render('subjects', {data_subjects : subjects});
//   // res.send(teachers);
// });
