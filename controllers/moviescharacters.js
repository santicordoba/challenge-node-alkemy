const { moviesCharactersModel } = require('../models');
/**
 * 
 * para validar que el request body
 * corresponda con el modelo
 * 
 */
const { matchedData } = require('express-validator');

const getItems = async (req, res) => {
    try{
        const data = await moviesCharactersModel.findAll({});
        res.send( {data} )
    }catch(e){
        console.log(e);
    }
}

const deleteItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await moviesCharactersModel.destroy({where: {id}});
        res.send({data});
    }catch(e){
        console.log(e);
    }
}

const createItem = async (req, res) => {
    try{
        req = matchedData(req);
        const data = await moviesCharactersModel.create(req);
        res.send( {data} );
    }catch(e){
        console.log(e);
    }
}


module.exports = {getItems, deleteItem, createItem};