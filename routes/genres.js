const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/genres');
const router = express.Router();

/**
 * 
 * Middleware de validacion de los datos de generos
 * 
 */

const { validatorCreateItem, validatorGetItem } = require('../validators/genres');

router.get("/", getItems)
router.get("/:id", validatorGetItem, getItem)
router.post("/", validatorCreateItem, createItem)
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem)
router.delete("/:id", validatorGetItem, deleteItem)

module.exports = router;