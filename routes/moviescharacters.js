const express = require('express');
const router = express.Router();
const { getItems, deleteItem, createItem} = require('../controllers/moviescharacters');
const { validatorCreateItem, validatorGetItem } = require('../validators/moviescharacters');
const authMiddleware = require('../middleware/session');

router.get('/', authMiddleware, getItems);
router.delete('/:id', authMiddleware, validatorGetItem, deleteItem);
router.post('/', authMiddleware, validatorCreateItem, createItem);

module.exports = router;
