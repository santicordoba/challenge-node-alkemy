const express = require('express');
const router = express.Router();
const { registerCtrl, loginCtrl } = require('../controllers/auth');
const { validatorRegister, validatorLogin } = require('../validators/auth');

/**
 * http://localhost:3501/api
 * 
 * Login user
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - auth
 *     summary: "Login de un usuario"
 *     description: Login de un usuario
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/authLogin'
 *     responses:
 *       '200':
 *         description: "El usuario se logea correctamente"
 *       '400':
 *         description: "Error"
 */
router.post("/login", validatorLogin, loginCtrl)
/**
 * http://localhost:3501/api
 * 
 * Register user
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - auth
 *     summary: "Registro de un usuario"
 *     description: Registro de un usuario
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/authRegister'
 *     responses:
 *       '200':
 *         description: "El usuario se registra correctamente"
 *       '400':
 *         description: "Error"
 */
router.post("/register", validatorRegister, registerCtrl)

module.exports = router;