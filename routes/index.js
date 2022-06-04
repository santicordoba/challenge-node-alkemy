const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = `${__dirname}`;

/**
 * 
 * Funcion para remover la extension de los 
 * archivos de las rutas. Separando el nombre en el punto
 * de modo que quede el nombre sin extension y el js separado
 * y con shift me quedo con la primer parte del nombre
 * 
 */

const removeExtension = (filename) => {
    return filename.split(".").shift();
}

/**
 * 
 * Usando el el modulo fs y si la ruta
 * ingresada es distinta de index se ejecuta
 * la ruta recibida.
 * 
 */

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if(name !== "index"){
            router.use(`/${name}`,require(`./${file}`));
    }
});

module.exports = router;