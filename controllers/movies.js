const { movieModel }  = require('../models');

const getItems = async (req, res) => {
    try{
        const data = await movieModel.findAll({});
        res.send( {data} )
    }catch(e){
        console.log(e);
    }
};
const getItem = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await movieModel.findByPk(id);
        res.send( {data} );
    }catch(e){
        cosnole.log(e);
    }
};
const createItem = async (req, res) => {
    try{
        const {body} = req;
        const data = await movieModel.create(body);
        res.send( {data} );
    }catch(e){
        console.log(e);
    }
};
const updateItem = async (req, res) => {
    try{
        const id = req.params.id;
        const {body} = req;
        const data = await movieModel.update(body, {where: {id}});
        res.send( {data} );
    }catch(e){
        console.log(e);
    }
};
const deleteItem = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await movieModel.destroy({where: {id}});
        res.send({data});
    }catch(e){
        console.log(e);
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};