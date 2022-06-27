const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/characters');
const { validatorCreateItem, validatorGetItem } = require('../validators/characters');
const authMiddleware = require('../middleware/session');


/**
 * Get all characters
 * @openapi
 * /api/characters:
 *  get:
 *    tags:
 *     - characters
 *    summary: "Lista todos los personajes"
 *    description: Obtener todos los personajes
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *          description: "Lista de personajes"
 *          content:
 *           application/json:
 *            schema:
 *             type: array
 *             items: 
 *              $ref: '#/components/schemas/characters'
 *      '400':
 *         description: "Error"
 *   
 */
router.get("/", authMiddleware, getItems);

/**
 * Search by name
 * @openapi
 * /api/characters?name={name}:
 *  get:
 *    tags:
 *     - characters
 *    summary: "Busqueda de personaje por nobmre"
 *    description: Busqueda de personaje por nombre
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *        -  in: "path"
 *           name: "name"
 *           description: "name character"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '200':
 *          description: "Busqueda de personaje por nombre"
 *          content:
 *           application/json:
 *            schema:
 *             type: array
 *             items: 
 *              $ref: '#/components/schemas/characters'
 *      '400':
 *         description: "Error"
 *   
 */
router.get("/", authMiddleware, getItems);

/**
 * Search by age
 * @openapi
 * /api/characters?age={age}:
 *  get:
 *    tags:
 *     - characters
 *    summary: "Busqueda de personaje por edad"
 *    description: Busqueda de personaje por edad
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *        -  in: "path"
 *           name: "age"
 *           description: "age character"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '200':
 *          description: "Busqueda de personaje por edad"
 *          content:
 *           application/json:
 *            schema:
 *             type: array
 *             items: 
 *              $ref: '#/components/schemas/characters'
 *      '400':
 *         description: "Error"
 *   
 */
router.get("/", authMiddleware, getItems);

/**
 * Search by weight
 * @openapi
 * /api/characters?weight={weight}:
 *  get:
 *    tags:
 *     - characters
 *    summary: "Busqueda de personaje por peso"
 *    description: Busqueda de personaje por peso
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *        -  in: "path"
 *           name: "weight"
 *           description: "weight character"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '200':
 *          description: "Busqueda de personaje por peso"
 *          content:
 *           application/json:
 *            schema:
 *             type: array
 *             items: 
 *              $ref: '#/components/schemas/characters'
 *      '400':
 *         description: "Error"
 *   
 */
router.get("/", authMiddleware, getItems);

/**
 * Get character by id (detail)
 * @swagger
 * /api/characters/{id}:
 *    get:
 *      tags:
 *        - characters
 *      summary: "Get detail character"
 *      description: Get character detail
 *      responses:
 *        '200':
 *          description: Retorna los detalles de un personaje.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID character"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 * 
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem);

/**
 * 
 * Route add new character
 * @openapi
 * /api/characters:
 *      post:
 *          tags:
 *              - characters
 *          summary: "Se agrega un nuevo personaje"
 *          description: "Esta ruta es para agregar un nuevo personaje"
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/characters"
 *          responses:
 *                  '201':
 *                      description: se agrega el personaje de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post("/", authMiddleware, validatorCreateItem, createItem);

/**
  * Upadte character
  * @swagger
  * /api/characters/{id}:
  *    put:
  *      tags:
  *        - characters
  *      summary: "Update Character"
  *      description: Update character
  *      responses:
  *        '200':
  *          description: Actualiza un personaje
  *        '422':
  *          description: Error de validacion.
  *      security:
  *        - bearerAuth: []
  *      requestBody:
  *           content:
  *                  application/json:
  *                      schema:
  *                          $ref: "#/components/schemas/characters"
  *      parameters:
  *        -  in: "path"
  *           name: "id"
  *           description: "ID character"
  *           required: true
  *           schema:
  *              type: string
  *    responses:
  *      '201':
  *        description: retorna el objeto insertado en la coleccion con stado '201'
  */
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);


/**
 * Delete character
 * @openapi
 * /api/characters/{id}:
 *   delete:
 *     tags:
 *       - characters
 *     summary: "Eliminar un personaje"
 *     description: Eliminar un personaje
 *     responses: 
 *       '200':
 *          description: "Personaje eliminado"
 *       '400':
 *          description: "Error"
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: "path"
 *         name: "id"
 *         description: "Id del personaje"
 *         required: true
 *         schema:
 *           type: string
 *   responses:
 *     '200':
 *       description: "Personaje eliminado"
 *     '400':
 *       description: "Error"
 */

router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;