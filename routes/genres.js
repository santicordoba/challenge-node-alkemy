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

/**
 * Get all genres
 * @openapi
 * /api/genres:
 *  get:
 *    tags:
 *     - genres
 *    summary: "Lista todos los generos"
 *    description: Obtener todos los generos
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *          description: "Lista de genres"
 *          content:
 *           application/json:
 *            schema:
 *             type: array
 *             items: 
 *              $ref: '#/components/schemas/genres'
 *      '400':
 *         description: "Error"
 *   
 */
router.get("/", authMiddleware, getItems)
/**
 * Get genre by id (detail)
 * @swagger
 * /api/genres/{id}:
 *    get:
 *      tags:
 *        - genres
 *      summary: "Get one genre"
 *      description: Get genre detail
 *      responses:
 *        '200':
 *          description: Retorna los detalles de un genero.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID genre"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 * 
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem)
/**
 * Route add new genre
 * @openapi
 * /api/genres:
 *      post:
 *          tags:
 *              - genres
 *          summary: "Se agrega un nuevo genero"
 *          description: "Esta ruta es para agregar un nuevo genero"
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/genres"
 *          responses:
 *                  '201':
 *                      description: se agrega el genero de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post("/", authMiddleware, validatorCreateItem, createItem)
/**
  * Upadte genre
  * @swagger
  * /api/genres/{id}:
  *    put:
  *      tags:
  *        - genres
  *      summary: "Update genre"
  *      description: Update genre
  *      responses:
  *        '200':
  *          description: Actualiza un genero
  *        '422':
  *          description: Error de validacion.
  *      security:
  *        - bearerAuth: []
  *      requestBody:
  *           content:
  *                  application/json:
  *                      schema:
  *                          $ref: "#/components/schemas/genres"
  *      parameters:
  *        -  in: "path"
  *           name: "id"
  *           description: "ID genre"
  *           required: true
  *           schema:
  *              type: string
  *    responses:
  *      '201':
  *        description: retorna el objeto insertado en la coleccion con stado '201'
  */
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem)
/**
 * Delete genre
 * @openapi
 * /api/genres/{id}:
 *   delete:
 *     tags:
 *       - genres
 *     summary: "Eliminar un genero"
 *     description: Eliminar un genero
 *     responses: 
 *       '200':
 *          description: "Genero eliminado"
 *       '400':
 *          description: "Error"
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: "path"
 *         name: "id"
 *         description: "Id del genero"
 *         required: true
 *         schema:
 *           type: string
 *   responses:
 *     '200':
 *       description: "Genero eliminado"
 *     '400':
 *       description: "Error"
 */
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem)

module.exports = router;