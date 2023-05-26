const express = require('express');
const cookieParser = require('cookie-parser');

const router = express.Router();
const userRouter = require('./user');
const tempRouter = require('./temp');

const { isLoggedIn } = require('../lib/middleware');

router.use(cookieParser());

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { needLogin: true });
});

router.use('/users', userRouter);
router.use('/temps', isLoggedIn, tempRouter);

module.exports = router;
