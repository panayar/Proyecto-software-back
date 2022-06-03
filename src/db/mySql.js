//BD CONNECTION 

const { query } = require('express');
const mysql = require('mysql');
const createUser = require('../controllers/user.controller');
const getUsers = require('../controllers/user.controller');

class Mysql {
    constructor() {
        this.conection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'password',
            database: 'db_software',
            port: 3306
        });


        this.conection.connect((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Conexion correcta');
            }
        });
    }
}

module.exports = Mysql;