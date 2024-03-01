const express = require('express');
const { connect } = require('../config/db.js');


const modelCliente = {

    selecionarTodosClientes: async () => {
        try {
            const conn = await connect();
            const [rows] = await conn.query('select * from clientes;');
            return rows;
        } catch (error) {
            throw error;
        }
    },
    selecionaPorID: async () => {
        try {
            const conn = await connect();
            const sql = 'SELECT * FROM clientes WHERE id=?;';
            const values = id;
            const [rows] = await conn.query(sql, values);
            return rows;
        } catch (error) {
            throw error;
        }
    },
    
}

module.exports =  modelCliente;