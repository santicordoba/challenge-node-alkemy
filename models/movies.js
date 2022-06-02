const { sequelize } = require('../config/mysql');
const { DataTypes } = require('sequelize');


/**
 * 
 * Modelo de la tabla de peliculas o series
 * 
 */

const Movie = sequelize.define(
    "movies",
    {
        title: {
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
        },
        dateRelease: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.ENUM([1, 2, 3, 4, 5])
        },
    },
    {
        timestamps: true
    }
)

module.exports = Movie;