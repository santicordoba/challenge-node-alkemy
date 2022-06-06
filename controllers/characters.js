const { characterModel }  = require('../models');

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
        const id = req.params.id;
        const data = await characterModel.findByPk(id);
        res.send({data});
    }catch(e){
        console.log(e);
    }
};
const createItem = async (req, res) => {
    try{
        const {body} = req;
        const data = await characterModel.create(body);
        res.send(data);
    }catch(e){
        console.log(e);
    }
};
const updateItem = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await characterModel.update(req.body, {where: {id}});
        res.send({data});
    }catch(e){
        console.log(e);
    }
};
const deleteItem = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await characterModel.destroy({where: {id}});
        res.send({data});
    }catch(e){  
        console.log(e);
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};