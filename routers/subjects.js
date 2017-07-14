"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res) => {
  model.Subject.findAll({
    include: [model.Teacher]
  })
  .then(data_subjects_teachers => {
    res.render('subjects', {data_subjects : data_subjects_teachers})
    // res.send(data_subjects_teachers);
  })
});


module.exports = router;



// model.Subject.findAll()
// .then(function(subjects) {
//   res.render('subjects', {data_subjects : subjects});
//   // res.send(teachers);
// });
