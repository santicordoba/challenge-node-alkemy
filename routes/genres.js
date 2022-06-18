const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/genres');
const router = express.Router();
const authMiddleware = require('../middleware/session');

/**
 * 
 * Middleware de validacion de los datos de generos
 * 
 */

const { validatorCreateItem, validatorGetItem } = require('../validators/genres');

router.get("/", authMiddleware, getItems)
router.get("/:id", authMiddleware, validatorGetItem, getItem)
router.post("/", authMiddleware, validatorCreateItem, createItem)
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem)
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem)

module.exports = router;