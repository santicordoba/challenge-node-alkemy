const { characterModel }  = require('../models');

const { matchedData } = require('express-validator');

const getItems = async (req, res) => {
    try{
        const data = await characterModel.findAll({});
        res.send( {data} );
    }catch(e){
        console.log(e);
    }
};
const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await characterModel.findByPk(id);
        res.send({data});
    }catch(e){
        console.log(e);
    }
};
const createItem = async (req, res) => {
    try{
        req = matchedData(req);
        const data = await characterModel.create(req);
        res.send(data);
    }catch(e){
        console.log(e);
    }
};
const updateItem = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await characterModel.update(body, {where: {id}});
        res.send({data});
    }catch(e){
        console.log(e);
    }
};
const deleteItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await characterModel.destroy({where: {id}});
        res.send({data});
    }catch(e){  
        console.log(e);
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};