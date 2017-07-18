"use strict"

const express = require('express');
const router = express.Router();
const model = require('../models');
const hash = require('../helpers/crypto');

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
    let passwordEncrypted = hash(req.body.password, session.secret);
    if (session.password === req.body.password || session.password === passwordEncrypted) {
      req.session.user = session.username,
      req.session.role = session.role
      res.redirect('/')
    } else {
      res.send('User not found')
    }
  })
})

router.get('/signup', (req, res) => {
  model.Role.findAll()
  .then(roles => {
    res.render('signup', {
      data_roles: roles,
      pagetitle: 'Signup Session'
    })
  })
})

router.post('/signup', (req, res) => {
  model.User.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  })
  .then(() => {
    res.redirect('/');
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/');
  })
})

module.exports = router;
//
