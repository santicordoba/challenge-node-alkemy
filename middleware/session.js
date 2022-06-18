const { tokenVerify } = require('../utils/handleJwt');
const { userModel }  = require('../models');

/**
 * 
 * Se valida que el header contenga un token
 * Se valida que el token sea valido
 * 
 */

const authMiddleware = async (req, res, next) => {
    try{
        if(!req.headers.authorization){
            console.log("No se encontro el header autorization");

        }
        const token = req.headers.authorization.split(" ")[1];
        const dataToken = await tokenVerify(token);
        if(!dataToken){
            console.log("Token invalido");

        }
        const user = await userModel.findByPk(dataToken.id);
        req.user = user;
        next();
    }
    catch(e){
        console.log("Error en el middleware");
    }
}

module.exports = authMiddleware;