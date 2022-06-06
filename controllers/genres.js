const { genreModel }  = require('../models');

const getItems = async (req, res) => {
    try{
        console.log("hola")
        const data = await genreModel.findAll({});
        res.send( {data} )
    }catch(e){
        console.log(e);
    }
};
const getItem = async (req, res) => {
    try{
        const id = req.params.id;
        console.log(id);
        const data = await genreModel.findByPk(id);
        res.send( {data} )
    }catch(e){
        console.log(e);
    }
};
const createItem = async (req, res) => {
    try{
        const {body} = req;
        const data = await genreModel.create(body);
        res.send( {data} );
    }catch(e){
        console.log(e);
    }
};
const updateItem = async (req, res) => {
    try{
        const id = req.params.id;
        const {body} = req;
        const data = await genreModel.update(body, {where: {id}});
        res.send( {data} );
    }catch(e){
        console.log(e);
    }
};
const deleteItem = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await genreModel.destroy({where: {id}});
        res.send({data});
    }catch(e){
        console.log(e);
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};