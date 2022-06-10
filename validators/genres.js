const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');


/**
 * 
 * Validacion de los datos de generos
 * 
 */
const validatorCreateItem = [
    check("name").exists().isString().notEmpty(),
    check("image").exists().isString().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
    ];

const validatorGetItem = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports = { validatorCreateItem, validatorGetItem };