"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res) => {
  model.Student.findAll().then(function(students) {
    res.render('students', {data_students : students});
  });
});


module.exports = router;
