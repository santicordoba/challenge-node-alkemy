const MoviesCharacters = require('./moviescharacters');

const models = {
    characterModel: require('./characters'),
    genreModel: require('./genres.js'),
    movieModel: require('./movies.js'),
    userModel: require('./users.js'),
    moviesCharactersModel: require('./moviescharacters')
}

module.exports = models; 