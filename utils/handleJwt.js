const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * 
 * Recibe el objeto usuario y retorna un token
 * 
 */
const tokenSign = async (user) => {
    const sign = jsonwebtoken.sign(
        {
            id: user.id,
        },
        JWT_SECRET,
        {
            expiresIn: '2h',
        }
    )
    return sign;
}

/**
 * 
 * Verifica si el token es valido
 * 
 */

const tokenVerify = async (token) => {
    try{
        return jsonwebtoken.verify(token, JWT_SECRET);
    }catch(e){
        return null;
    }
}

module.exports = {tokenSign, tokenVerify};