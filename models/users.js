const { sequelize} = require('../config/mysql');
const { DataTypes } = require('sequelize');

/**
 * 
 * Modelo de la tabla de usuarios
 * 
 */

const User = sequelize.define(
    "users",
    {
        nickname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true
    }
)

module.exports = User;