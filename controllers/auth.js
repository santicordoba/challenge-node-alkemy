const { userModel }  = require('../models');
const {matchedData} = require('express-validator');
const {encrypt, compare} = require('../utils/handlePassword')
const {tokenSign, tokenVerify} = require('../utils/handleJwt');

const registerCtrl = async (req, res) => {
    try{
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = {...req, password};
        console.log(body);
        const dataUser = await userModel.create(body);
        // quitar password del objeto
        dataUser.set("password", undefined, {strict:false});
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        res.send({data});
    }catch(e){
        console.log(e);
    }
};

const loginCtrl = async (req, res) => {
    try{
        req = matchedData(req);
        // traemos el user de la bd
        const user = await userModel.findOne({where: {email:req.email}});
        if(!user){
            throw new Error("Usuario no encontrado");
            return;
        }
        // comparamos el password
        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword);
        if(!check){
            throw new Error("Password incorrecto");
            return;
        }
        // generamos el token y sacamos el password de la respuesta
        user.set("password", undefined, {strict:false});
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send(data);
    }catch(e){
        console.log(e);
    }
};

module.exports = {registerCtrl, loginCtrl};