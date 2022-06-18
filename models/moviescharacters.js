const { sequelize } = require('../config/mysql');
const { DataTypes } = require('sequelize');

/**
 * 
 * Modelo de la tabla de relacion movies characters
 * 
 */

const MoviesCharacters = sequelize.define(
    "moviescharacters",
    {
        idMovie: {
            type: DataTypes.INTEGER,
        },
        idCharacter: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: true
    }
)

module.exports = MoviesCharacters;