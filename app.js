/**
 * 
 * Importación de los modulos
 * 
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {dbConnection} = require('./config/mysql');
const app = express();

// documentacion
const swaggerUI = require('swagger-ui-express');
const openApiConfig = require('./docs/swagger.js');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;


/**
 * Definir ruta de documentación
 */
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfig))


/**
 * Invocacion de las rutas
 */
app.use("/api", require("./routes"));

/**
 * 
 * Se lanza la app en el puerto guardado en .env
 * o en el puerto 3000
 * 
 */

app.listen(port, ()=>{
    console.log(`La app esta corriendo en el puerto ${port}`);
})

/**
 * 
 * Se realiza la conexion a la base de datos
 * 
 */

dbConnection();