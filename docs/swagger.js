const swaggerJsDoc = require('swagger-jsdoc');

/**
 * 
 * Configuracion de swagger
 * 
 */

PORT = process.env.PORT;

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Documentacion API Disney Alkemy',
        version: '1.0.0',
    },
    severs: [
        {
            url: `http://localhost:${PORT}/api`
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        },
        schemas: {
            characters: {
                type: 'object',
                required: ['name', 'image', 'age', 'weight', 'history'],
                properties: {
                    name: {
                        type: 'string',
                    },
                    image: {
                        type: 'string',
                    },
                    age: {
                        type: 'integer',
                    },
                    weight: {
                        type: 'double',
                    },
                    history: {
                        type: 'string',
                    }
                }
            },
            movies: {
                type: 'object',
                required: ['title', 'image', 'dateRelease', 'rating', 'idGenre'],
                properties: {
                    title: {
                        type: 'string',
                    },
                    image: {
                        type: 'string',
                    },
                    dateRelease: {
                        type: 'string',
                    },
                    rating: {
                        type: 'enum',
                        enum: [1, 2, 3, 4, 5],
                    },
                    idGenre: {
                        type: 'integer',
                    }
                }
            },
            genres: {
                type: 'object',
                required: ['name', 'image'],
                properties: {
                    name: {
                        type: 'string',
                    },
                    image: {
                        type: 'string',
                    }
                }
            },
            authLogin: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    }
                }
            },
            authRegister: {
                type: 'object',
                required: ['email', 'password', 'nickname'],
                properties: {
                    email: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                    nickname: {
                        type: 'string',
                    }
                }
            },
            moviescharacters: {
                type: 'object',
                required: ['idMovie', 'idCharacter'],
                properties: {
                    idMovie: {
                        type: 'integer',
                    },
                    idCharacter: {
                        type: 'integer',
                    }
                }
            },
        }
    }
}

/**
 * 
 * Options
 * 
 */

const options = {
    swaggerDefinition,
    apis:[
        "./routes/*.js"
    ]
}

const openApiConfig = swaggerJsDoc(options);

module.exports = openApiConfig;