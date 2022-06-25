const { movieModel, characterModel }  = require('../models');
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
        if(Object.keys(req.query).length === 0){
            const data = await movieModel.findAll({
                where : req.query,
                attributes: ['title', 'image', 'dateRelease']
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
        handleHttpError(res, "ERROR_GETALLITEMS_MOVIES")
    }
};
const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await movieModel.findOne({
            include: {
                model: characterModel,
                through: {
                    attributes: [],
                },
                attributes: ['name', 'image', 'age', 'weight', 'history'],
            },
            attributes: ['title', 'image', 'dateRelease', 'rating', 'idGenre'],
            where: {
                id,
            }
        });
        res.send( {data} );
    }catch(e){
        handleHttpError(res, "ERROR_GETITEM_MOVIES")
    }
};
const createItem = async (req, res) => {
    try{
        req = matchedData(req);
        const data = await movieModel.create(req);
        res.send( {data} );
    }catch(e){
        handleHttpError(res, "ERROR_CREATEITEM_MOVIES")
    }
};
const updateItem = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await movieModel.update(body, {where: {id}});
        res.send( {data} );
    }catch(e){
        handleHttpError(res, "ERROR_UPDATEITEM_MOVIES")
    }
};
const deleteItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await movieModel.destroy({where: {id}});
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_DELETEITEM_MOVIES")
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};