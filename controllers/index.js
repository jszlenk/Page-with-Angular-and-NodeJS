var router = require('express').Router();
router.use('/', require('./static'));
router.use('/', require('./api/mail'));

module.exports = router;
