const clienteModel = require('../models/clienteModel');

const clienteController = {

    //retorna todos os clientes na tabela clientes
    chamaMetodoParaSelecionarTodosClientes: async (req, res) => {
        try{
            const clientes = await clienteModel.selecionarTodosClientes();
            return res.json(clientes);
        } catch (error) {
            throw error;
        }
    },

    //retorna o cliente com base no id
    selecionaClientePeloID: async (req,res) => {
        try{
            const clientes = await selecionaClientePeloID();
            const { id } = req.params;
            return res.json(clientes);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = {clienteController};