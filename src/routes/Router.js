const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');
const funcionarioController = require('../controller/funcionarioController');
const sexoController = require('../controller/sexoController');
const departamentoController = require('../controller/departamentoController');

router.post('/api/login', loginController.login);

router.get('/api/funcionario/consultar', funcionarioController.getList);

router.get('/api/funcionario/consultarId/:idFuncionario', funcionarioController.getById);

router.post('/api/funcionario/', funcionarioController.add);

router.put('/api/funcionario/editar', funcionarioController.update);

router.delete('/api/funcionario/eliminar/:idFuncionario', funcionarioController.delete);

router.get('/api/sexo/consultar', sexoController.getList);

router.get('/api/departamento/consultar', departamentoController.getList);

module.exports = router;