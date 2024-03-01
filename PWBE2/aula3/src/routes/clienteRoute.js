const express = require('express');

const router = express.Router();

const {clienteController} = require("../controllers/clienteController");

router.get("/clientes", clienteController.chamaMetodoParaSelecionarTodosClientes);
router.get("/clientes/:id", clienteController.selecionaClientePeloID);

module.exports = router;