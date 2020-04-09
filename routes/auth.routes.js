const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const User = require('../models/User.model');

//PASSPORT
const passport = require('passport');
const ensureLogin = require('connect-ensure-login');

//AUTH
router.get('/', (req, res, next) => {
    res.render('index');
});

























module.exports = router;
