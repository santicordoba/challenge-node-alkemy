const { sequelize } = require('../config/mysql');
const { DataTypes } = require('sequelize');
const moviesModel = require('../models/movies');
const charactersModel = require('../models/characters');
const genreModel = require('../models/genres');

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

/**
 * 
 * Relaciones tablas movies characters
 * 
 */
moviesModel.belongsToMany(charactersModel, { through: 'MoviesCharacters', foreignKey: 'idMovie', });
charactersModel.belongsToMany(moviesModel, { through: 'MoviesCharacters', foreignKey: 'idCharacter', });


module.exports = MoviesCharacters;