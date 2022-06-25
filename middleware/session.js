const { tokenVerify } = require('../utils/handleJwt');
const { userModel }  = require('../models');
const { handleHttpError } = require('../utils/handleHttpError');
/**
 * 
 * Se valida que el header contenga un token
 * Se valida que el token sea valido
 * 
 */

const authMiddleware = async (req, res, next) => {
    try{
        if(!req.headers.authorization){
            handleHttpError(res, "NEED_SESSION", 401);
            return
        }
        const token = req.headers.authorization.split(" ")[1];
        const dataToken = await tokenVerify(token);
        if(!dataToken){
            handleHttpError(res, "NOT_PAYLOAD_DATA", 401);
            return
        }
        const user = await userModel.findByPk(dataToken.id);
        req.user = user;
        next();
    }
    catch(e){
        handleHttpError(res, "NOT_SESSION", 401);
    }
}

module.exports = authMiddleware;