const { sequelize } = require('../config/mysql');
const { DataTypes } = require('sequelize');

/**
 * 
 * Modelo de la tabla de personajes
 * 
 */

const Character = sequelize.define(
    "characters",
    {
        name: {
            type: DataTypes.STRING,
        },
        urlImage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        filenameImage: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        weight: {
            type: DataTypes.DOUBLE,
        },
        history: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true
    }
);

module.exports = Character;