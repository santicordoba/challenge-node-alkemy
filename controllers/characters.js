const { characterModel, movieModel }  = require('../models');
const { handleHttpError } = require('../utils/handleHttpError');

const { matchedData } = require('express-validator');

const getItems = async (req, res) => {
    try{
        if(Object.keys(req.query).length === 0){
            const data = await characterModel.findAll({
                attributes: ['name', 'image']
            });
            res.send( {data} );
        } else {
            const data = await characterModel.findAll({
                where : req.query
            });
            res.send( {data} );
        }
    }catch(e){
        handleHttpError(res, "ERROR_GETALLITEMS_CHARACTERS")
    }
};

const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await characterModel.findOne({
            include: {
                model: movieModel,
                through: {
                    attributes: [],
                },
                attributes: ["title", "image", "dateRelease"],
            },
            attributes: ["name", "age", "weight", "history", "image"],
            where: {
                id,
            },
        });
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_GETITEM_CHARACTERS")
    }
};
const createItem = async (req, res) => {
    try{
        req = matchedData(req);
        const data = await characterModel.create(req);
        res.send(data);
    }catch(e){
        handleHttpError(res, "ERROR_CREATEITEM_CHARACTERS")
    }
};
const updateItem = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await characterModel.update(body, {where: {id}});
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_UPDATEITEM_CHARACTERS")
    }
};
const deleteItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await characterModel.destroy({where: {id}});
        res.send({data});
    }catch(e){  
        handleHttpError(res, "ERROR_DELETEITEM_CHARACTERS")
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};