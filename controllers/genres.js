const { genreModel }  = require('../models');
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
        const data = await genreModel.findAll({});
        res.send( {data} )
    }catch(e){
        handleHttpError(res, "ERROR_GETALLITEMS_GENRES");
    }
};
const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await genreModel.findByPk(id);
        res.send( {data} )
    }catch(e){
        handleHttpError(res, "ERROR_GETITEM_GENRES");
    }
};
const createItem = async (req, res) => {
    try{
        req = matchedData(req);
        const data = await genreModel.create(req);
        res.send( {data} );
    }catch(e){
        handleHttpError(res, "ERROR_CREATEITEM_GENRES");
    }
};
const updateItem = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await genreModel.update(body, {where: {id}});
        res.send( {data} );
    }catch(e){
        handleHttpError(res, "ERROR_UPDATEITEM_GENRES");
    }
};
const deleteItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await genreModel.destroy({where: {id}});
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_DELETEITEM_GENRES");
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};