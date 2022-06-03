const res = require('express/lib/response');
const Mysql = require('../db/mySql');
const mySql = new Mysql();


const createUser = async (req, res) => {
    const {name, email, password, language} = req.body;
    const query = `INSERT INTO user VALUES (DEFAULT,'${name}', '${email}', '${password}', '${language}')`;

    const result = await mySql.conection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: 'Error al crear el usuario'
            });
            
        } else {
            console.log(result);
            res.status(200).json({
                message: 'Usuario creado correctamente'
            });
        }
    });
    
}

const getUsers = async (req, res) => {
    const query = `SELECT * FROM user`;
    const result = await mySql.conection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error', {
                message: 'Error al obtener los usuarios',
            })
            
        } else {
            console.log(result);
            res.status(200).json({
                message: 'Usuarios obtenidos correctamente',
            });
        }
    });
}

const deleteUser = async (req, res) => { 
    const query = `DELETE FROM user WHERE id = ${req.params.id}`;
    const result = await mySql.conection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error', {
                message: 'Error al eliminar el usuario',
            })
            
        } else {
            console.log(result);
            res.status(200).json({
                message: 'Usuario eliminado correctamente'
            });
        }
    });
}

module.exports = {
    createUser,
    getUsers, 
    deleteUser
}