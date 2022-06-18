const { movieModel, moviesCharactersModel }  = require('../models');
/**
 * 
 * para validar que el request body
 * corresponda con el modelo
 * 
 */
const { matchedData } = require('express-validator');

const getItems = async (req, res) => {
    try{
        if(Object.keys(req.query).length === 0){
            const data = await movieModel.findAll({
                where : req.query
            });
            res.send( {data} )
        } else {
            if(req.query["name"]){
                const data = await movieModel.findAll({
                    where : { title: req.query.name
                    }
            });
            res.send( {data} );
        } else {
            if(req.query["genre"]){
                const data = await movieModel.findAll({
                    where : { idGenre: req.query.genre
                    }
            });
            res.send( {data} );
            } else {
                if(req.query["order"]){
                    const order = req.query.order;
                    const data = await movieModel.findAll({
                        order: [["title", order]]
                    });
                    res.send( {data} );
                } else {
                    throw new Error("Parametro no valido");
                }
        }
    }}
    }catch(e){
        console.log(e);
    }
};
const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await movieModel.findByPk(id);
        res.send( {data} );
    }catch(e){
        console.log(e);
    }
};
const createItem = async (req, res) => {
    try{
        if(req.body.idCharacter){
            console.log("Trae idPersonaje")
            var idCharacter = req.body.idCharacter;
            req = matchedData(req);
            const data = await movieModel.create(req);

            //Crear la relacion entre la pelicula y el personaje
            bodyCharacterMovie = {
                idMovie: data.dataValues.id,
                idCharacter: idCharacter
            }
            const dataMC = await moviesCharactersModel.create(bodyCharacterMovie);
            res.send( {data} );            
        } else {
            req = matchedData(req);
            const data = await movieModel.create(req);
            res.send( {data} );
        }
    }catch(e){
        console.log(e);
    }
};
const updateItem = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await movieModel.update(body, {where: {id}});
        res.send( {data} );
    }catch(e){
        console.log(e);
    }
};
const deleteItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await movieModel.destroy({where: {id}});
        res.send({data});
    }catch(e){
        console.log(e);
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};