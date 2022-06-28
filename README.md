# Challenge Alkemy Node JS 🚀
## API REST Disney World 
Desarrollar una API para explorar el mundo de Disney, la cual permitirá conocer y modificar los
personajes que lo componen y entender en qué películas estos participaron. Por otro lado, deberá
exponer la información para que cualquier frontend pueda consumirla.

◼ NODE.js, Express.js<br>
◼ Libreria Sequelize para la Base de datos<br>
◼ Swagger para la documentación<br>
◼ Express validator para validar las request<br>
◼ Sendgrid para el envio de emails

## Instalación 👨‍💻

1- Clonar el repositorio <br>
2- Ejecutar el siguiente comando
        <code>
            npm install
        </code>
<br>
3- Crear un archivo .env y definir las variables(ver archivo .env.example para sacar el nombre de las variables requeridas)<br>
4- Crear la base de datos se deja el archivo alkemy.sql con el modelo utilizado<br>
5- En .env colocar las datos para acceder a la base de datos: nombre de la base de datos, usuario de phpmyadmin, password de phpmyadmin, host: localhost<br>
6- Correr la api con el comando
<code>
npm run dev
</code>

Todo Listo... 🚀

## Notas / Consideraciones 📃
- Adicionalmente cree un modelo para la relacion entre movies y characters
- Los test no estan implementados
- La documentacion se encuentra en la ruta localhost:PORT/documentation<br>
    *Donde PORT es el puerto seteado en .env*

## Requerimientos 📄

**Modelos de las Bases de Datos**
- Personaje: deberá tener
  - Imagen.
  - Nombre.
  - Edad.
  - Peso.
  - Historia.
  - Películas o series asociadas.
- Película o Serie: deberá tener,
  - Imagen.
  - Título.
  - Fecha de creación.
  - Calificación (del 1 al 5).
  - Personajes asociados.
- Género: deberá tener,
  - Nombre.
  - Imagen.
  - Películas o series asociadas.

**Autenticación de Usuarios**
Para realizar peticiones a los endpoints subsiguientes el usuario deberá contar con un token que
obtendrá al autenticarse. Para ello, deberán desarrollarse los endpoints de registro y login, que
permitan obtener el token.

Los endpoints encargados de la autenticación deberán ser:
- /auth/login <br>
- /auth/register <br>

**Listado de Personajes**
El listado deberá mostrar:
- Imagen.
- Nombre.

El endpoint deberá ser:
 /characters
 
**Creación, Edición y Eliminación de Personajes (CRUD)**
Deberán existir las operaciones básicas de creación, edición y eliminación de personajes.

**Detalle de Personaje**
En el detalle deberán listarse todos los atributos del personaje, como así también sus películas o
series relacionadas.

**Búsqueda de Personajes**
Deberá permitir buscar por nombre, y filtrar por edad, peso o películas/series en las que participó.
Para especificar el término de búsqueda o filtros se deberán enviar como parámetros de query:

- GET /characters?name=nombre
- GET /characters?age=edad
- GET /characters?movies=idMovie

**Listado de Películas**
Deberá mostrar solamente los campos imagen, título y fecha de creación.
El endpoint deberá ser:
- GET /movies

**Detalle de Película / Serie con sus personajes**
Devolverá todos los campos de la película o serie junto a los personajes asociados a la misma

**Creación, Edición y Eliminación de Película / Serie**
Deberán existir las operaciones básicas de creación, edición y eliminación de películas o series.

**Búsqueda de Películas o Series**
Deberá permitir buscar por título, y filtrar por género. Además, permitir ordenar los resultados
por fecha de creación de forma ascendiente o descendiente.

El término de búsqueda, filtro u ordenación se deberán especificar como parámetros de query:
- GET /movies?name=nombre
- GET /movies?genre=idGenero
- GET /movies?order=ASC | DESC

**Envío de emails**
Al registrarse en el sitio, el usuario deberá recibir un email de bienvenida. Es recomendable, la
utilización de algún servicio de terceros como SendGrid.
 
**Documentación**
Es deseable documentar los endpoints utilizando alguna herramienta como Postman o
Swagger.

**Tests**
De forma opcional, se podrán agregar tests de los diferentes endpoints de la APP, verificando
posibles escenarios de error:
- Campos faltantes o con un formato inválido en BODY de las peticiones
- Acceso a recursos inexistentes en endpoints de detalle<br>
Los tests pueden realizarse utilizando Mocha + Chai.