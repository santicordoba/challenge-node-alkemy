const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

/**
 * 
 * Validacion register y login
 * 
 */

const validatorRegister = [
    check("nickname").exists().isString().notEmpty(),
    check("email").exists().isString().notEmpty(),
    check("password").exists().isString().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

const validatorLogin = [
    check("email").exists().isString().notEmpty(),
    check("password").exists().isString().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports = { validatorRegister, validatorLogin };