const express = require('express');
const router = express.Router();
const controller = require('../controller/funcionarioController');

router.post('/api/login', controller.login);

module.exports = router;