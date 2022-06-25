const { userModel }  = require('../models');
const {matchedData} = require('express-validator');
const {encrypt, compare} = require('../utils/handlePassword')
const {tokenSign, tokenVerify} = require('../utils/handleJwt');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { handleHttpError } = require('../utils/handleHttpError');

const registerCtrl = async (req, res) => {
    try{
        req = matchedData(req);

        const password = await encrypt(req.password);
        const body = {...req, password};
        const dataUser = await userModel.create(body);
        // quitar password del objeto
        dataUser.set("password", undefined, {strict:false});
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        // enviar email de confirmacion
        const msg = {
            to: dataUser.email,
            from: 'santicordoba93@gmail.com',
            subject: 'Bienvenid@ a la API de Disney',
            text: 'Hola, ' + dataUser.nickname + '! Gracias por registrarte en la API de Disney. Revisa la documentación para más información.',
            html: '<strong>Hola, ' + dataUser.nickname + '!</strong> Gracias por registrarte en la API de Disney. Revisa la documentación para más información.',
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_REGISTER_USER")
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
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
};

module.exports = {registerCtrl, loginCtrl};