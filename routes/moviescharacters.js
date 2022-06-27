const express = require('express');
const router = express.Router();
const { getItems, deleteItem, createItem} = require('../controllers/moviescharacters');
const { validatorCreateItem, validatorGetItem } = require('../validators/moviescharacters');
const authMiddleware = require('../middleware/session');

/**
 * Get all relation movies characters
 * @openapi
 * /api/moviescharacters:
 *  get:
 *    tags:
 *     - moviescharacters
 *    summary: "Lista relacion movies characters"
 *    description: Obtener las relaciones de peliculas y personajes
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *          description: "Lista de relaciones"
 *          content:
 *           application/json:
 *            schema:
 *             type: array
 *             items: 
 *              $ref: '#/components/schemas/moviescharacters'
 *      '400':
 *         description: "Error"
 *   
 */
router.get('/', authMiddleware, getItems);
/**
 * 
 * Route add new relation movies characters
 * @openapi
 * /api/moviescharacters:
 *      post:
 *          tags:
 *              - moviescharacters
 *          summary: "Se agrega una nueva relacion pelicula personaje"
 *          description: "Esta ruta es para agregar una nueva relacion pelicula personaje"
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/moviescharacters"
 *          responses:
 *                  '201':
 *                      description: se agrega la relacion de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post('/', authMiddleware, validatorCreateItem, createItem);

/**
 * Delete relation movies character
 * @openapi
 * /api/moviescharacters/{id}:
 *   delete:
 *     tags:
 *       - moviescharacters
 *     summary: "Eliminar una relacion pelicula personaje"
 *     description: Eliminar una relacion pelicula personaje
 *     responses: 
 *       '200':
 *          description: "Relacion eliminada"
 *       '400':
 *          description: "Error"
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: "path"
 *         name: "id"
 *         description: "Id de la relacion"
 *         required: true
 *         schema:
 *           type: string
 *   responses:
 *     '200':
 *       description: "Relacion eliminada"
 *     '400':
 *       description: "Error"
 */
router.delete('/:id', authMiddleware, validatorGetItem, deleteItem);

module.exports = router;
