const express = require('express');
const router = express.Router();
const { registerCtrl, loginCtrl } = require('../controllers/auth');
const { validatorRegister, validatorLogin } = require('../validators/auth');

router.post("/login", validatorLogin, loginCtrl)
router.post("/register", validatorRegister, registerCtrl)

module.exports = router;