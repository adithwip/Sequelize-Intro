"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res) => {
  model.Subject.findAll().then(function(subjects) {
    res.render('subjects', {data_subjects : subjects});
    // res.send(teachers);
  });
});


module.exports = router;
