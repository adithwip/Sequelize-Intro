"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res) => {
  model.Teacher.findAll().then(function(teachers) {
    res.render('teachers', {data_teachers : teachers});
    // res.send(teachers);
  });
});


module.exports = router;
