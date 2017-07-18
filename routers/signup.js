// "use strict"
//
// const express = require('express');
// const router = express.Router();
// const model = require('../models');
// const generate = require('../helpers/generateKey');
//
//
// router.get('/', (req, res) => {
//   res.render('signup', {
//     pagetitle: 'Signup Session'
//   })
// })
//
// router.post('/', (req, res) => {
//   model.User.create({
//     username: req.body.username,
//     password: req.body.password
//   })
//   .then(() => {
//     res.redirect('/');
//   })
// })
