const { Sequelize } = require('sequelize');

/**
 * 
 * Se obtienen de .env los datos de
 * conexion a la base de datos
 * 
 */

const database = process.env.MYSQL_DB;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASS;
const host = process.env.MYSQL_HOST;


/**
 * 
 * Configuración de la conexión a la base de datos
 * Se realiza la conexion con sequelize y se exporta la conexion
 * 
 */


const sequelize = new Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
});

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection ok");
    } catch(error){
        console.log("Connection failed");
    }
};

module.exports = { sequelize, dbConnection };