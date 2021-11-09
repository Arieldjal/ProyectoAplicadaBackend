const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');
const funcionarioController = require('../controller/funcionarioController');
const solicitudController = require('../controller/solicitudController');
const sexoController = require('../controller/sexoController');
const departamentoController = require('../controller/departamentoController');

/** Login */
router.post('/api/login', loginController.login);

/** Funcionario */
router.get('/api/funcionario/consultar', funcionarioController.getList);

router.get('/api/funcionario/consultaSimple', funcionarioController.getSimpleList);

router.get('/api/funcionario/consultarId/:idFuncionario', funcionarioController.getById);

router.post('/api/funcionario/', funcionarioController.add);

router.put('/api/funcionario/editar', funcionarioController.update);

router.delete('/api/funcionario/eliminar/:idFuncionario', funcionarioController.delete);

/** Solicitud */
router.get('/api/solicitud/consultar', solicitudController.getList);

router.get('/api/solicitud/consultarId/:idSolicitud', solicitudController.getById);

router.post('/api/solicitud/', solicitudController.add);

router.put('/api/solicitud/editar', solicitudController.update);

router.delete('/api/solicitud/eliminar/:idSolicitud', solicitudController.delete);

/** Sexo */
router.get('/api/sexo/consultar', sexoController.getList);

/** Departamento */
router.get('/api/departamento/consultar', departamentoController.getList);

module.exports = router;