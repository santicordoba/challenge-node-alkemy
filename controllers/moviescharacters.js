const { moviesCharactersModel } = require('../models');
const { handleHttpError } = require('../utils/handleHttpError');
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
        handleHttpError(res, "ERROR_GETALLITEMS_RELATIONMOVIECHARACTER")
    }
}

const deleteItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await moviesCharactersModel.destroy({where: {id}});
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_DELETEITEM_RELATIONMOVIECHARACTER");
    }
}

const createItem = async (req, res) => {
    try{
        req = matchedData(req);
        const data = await moviesCharactersModel.create(req);
        res.send( {data} );
    }catch(e){
        handleHttpError(res, "ERROR_CREATEITEM_RELATIONMOVIECHARACTER");
    }
}


module.exports = {getItems, deleteItem, createItem};