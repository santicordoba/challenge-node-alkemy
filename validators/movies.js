const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateItem = [
    check("title").exists().isString().notEmpty(),
    check("image").exists().isString().notEmpty(),
    check("dateRelease").exists().isDate().notEmpty(),
    check("rating").exists().isInt(),
    check("idGenre").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

const validatorGetItem = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = { validatorCreateItem, validatorGetItem };