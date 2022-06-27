const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/movies');
const { validatorCreateItem, validatorGetItem } = require('../validators/movies');
const authMiddleware = require('../middleware/session');

/**
 * Get all movies
 * @openapi
 * /api/movies:
 *  get:
 *    tags:
 *     - movies
 *    summary: "Lista todos las peliculas y series "
 *    description: Obtener todos las peliculas y series
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *          description: "Lista de peliculas y series"
 *          content:
 *           application/json:
 *            schema:
 *             type: array
 *             items: 
 *              $ref: '#/components/schemas/movies'
 *      '400':
 *         description: "Error"
 *   
 */
router.get("/", authMiddleware, getItems);
/**
 * Search movie by title
 * @openapi
 * /api/movies?name={name}:
 *  get:
 *    tags:
 *     - movies
 *    summary: "Busqueda de peliculas o series por titulo"
 *    description: busqueda de peliculas o series por titulo
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *       -  in: "path"
 *          name: "name"
 *          description: "name movie or serie"
 *          required: true
 *    responses:
 *      '200':
 *          description: "Busqueda de peliculas y series"
 *          content:
 *           application/json:
 *            schema:
 *             type: array
 *             items: 
 *              $ref: '#/components/schemas/movies'
 *      '400':
 *         description: "Error"
 *   
 */
router.get("/", authMiddleware, getItems);

/**
 * Search movie by id genero
 * @openapi
 * /api/movies?genre={genre}:
 *  get:
 *    tags:
 *     - movies
 *    summary: "Busqueda de peliculas o series por id de genero"
 *    description: busqueda de peliculas o series por id de genero
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *       -  in: "path"
 *          name: "genre"
 *          description: "id genero"
 *          required: true
 *    responses:
 *      '200':
 *          description: "Busqueda peliculas y series"
 *          content:
 *           application/json:
 *            schema:
 *             type: array
 *             items: 
 *              $ref: '#/components/schemas/movies'
 *      '400':
 *         description: "Error"
 *   
 */
router.get("/", authMiddleware, getItems);

/**
 * List movies order by name
 * @openapi
 * /api/movies?order={order}:
 *  get:
 *    tags:
 *     - movies
 *    summary: "Listado de peliculas o series ordenadas por nombre"
 *    description: Listado de peliculas o series ordenadas por nombre
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *       -  in: "path"
 *          name: "order"
 *          description: "Order: ASC | DESC"
 *          required: true
 *    responses:
 *      '200':
 *          description: "Listado de peliculas o series ordenadas por nombre"
 *          content:
 *           application/json:
 *            schema:
 *             type: array
 *             items: 
 *              $ref: '#/components/schemas/movies'
 *      '400':
 *         description: "Error"
 *   
 */
router.get("/", authMiddleware, getItems);

/**
 * Get movie by id (detail)
 * @swagger
 * /api/movies/{id}:
 *    get:
 *      tags:
 *        - movies
 *      summary: "Get one movie"
 *      description: Get movie detail
 *      responses:
 *        '200':
 *          description: Retorna los detalles de una pelicula o serie.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID movie"
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
 * Route add new movie
 * @openapi
 * /api/movies:
 *      post:
 *          tags:
 *              - movies
 *          summary: "Se agrega una nueva pelicula o serie"
 *          description: "Esta ruta es para agregar una nueva pelicula o serie"
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/movies"
 *          responses:
 *                  '201':
 *                      description: se agrega la pelicula o serie de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post("/", authMiddleware, validatorCreateItem,createItem);
/**
  * Upadte movie
  * @swagger
  * /api/movies/{id}:
  *    put:
  *      tags:
  *        - movies
  *      summary: "Update movie"
  *      description: Update movie
  *      responses:
  *        '200':
  *          description: Actualiza una pelicula o serie
  *        '422':
  *          description: Error de validacion.
  *      security:
  *        - bearerAuth: []
  *      requestBody:
  *           content:
  *                  application/json:
  *                      schema:
  *                          $ref: "#/components/schemas/movies"
  *      parameters:
  *        -  in: "path"
  *           name: "id"
  *           description: "ID movie"
  *           required: true
  *           schema:
  *              type: string
  *    responses:
  *      '201':
  *        description: retorna el objeto insertado en la coleccion con stado '201'
  */
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);
/**
 * Delete movie
 * @openapi
 * /api/movies/{id}:
 *   delete:
 *     tags:
 *       - movies
 *     summary: "Eliminar una pelicula o serie"
 *     description: Eliminar una pelicula o serie
 *     responses: 
 *       '200':
 *          description: "Pelicula o serie eliminada"
 *       '400':
 *          description: "Error"
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: "path"
 *         name: "id"
 *         description: "Id de la pelicula o serie"
 *         required: true
 *         schema:
 *           type: string
 *   responses:
 *     '200':
 *       description: "Pelicula o serie eliminada"
 *     '400':
 *       description: "Error"
 */
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;