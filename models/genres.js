const { sequelize } = require('../config/mysql');
const { DataTypes } = require('sequelize');

/**
 * 
 * Modelo de la tabla de generos
 * 
 */

const Genre = sequelize.define(
    "genres",
    {
        name: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true
    }
)

module.exports = Genre;