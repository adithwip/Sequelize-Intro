"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res) => {
  res.render('index', {
    pagetitle: 'Welcome Page',
    h1: 'HOME',
    dropdownmenu: ' ',
    linkdropdown: ' ',
    session: req.session.user,
    session_role: req.session.role
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    pagetitle: 'Login session',
    msg: null
  });
})

router.post('/login', (req, res) => {
  model.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(session => {
    if (session && session.password === req.body.password) {
      req.session.user = session.username,
      req.session.role = session.role
      res.redirect('/')
    } else {
      res.send('User not found')
    }
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/');
  })
})

module.exports = router;
