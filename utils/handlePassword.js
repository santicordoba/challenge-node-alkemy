const bcryptjs = require('bcryptjs');

/**
 * 
 * passwordPlain contraseña sin encriptar
 * retorna un hash encriptado
 * 
 */

const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    return hash;
}

/**
 * 
 * Recibe contraseña sin encriptar y contraseña encriptada
 * retorna true si las contraseñas coinciden
 * 
 */

const compare = async (passwordPlain, passwordHash) => {
    return bcryptjs.compare(passwordPlain, passwordHash);
}

module.exports = { encrypt, compare };