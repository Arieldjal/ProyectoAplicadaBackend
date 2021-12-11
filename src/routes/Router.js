const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');
const funcionarioController = require('../controller/funcionarioController');
const solicitudController = require('../controller/solicitudController');
const sexoController = require('../controller/sexoController');
const departamentoController = require('../controller/departamentoController');
const trimestreController = require('../controller/trimestreController');
const avanceController = require('../controller/avanceController');
const reportesController = require('../controller/reportesController');
const transaccionController = require('../controller/transaccionController');

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

router.get('/api/solicitud/consultaSimple', solicitudController.getSimpleList);

router.get('/api/solicitud/consultaSolicitudesIds', solicitudController.getSolicitudesIds);

router.post('/api/solicitud/', solicitudController.add);

router.put('/api/solicitud/editar', solicitudController.update);

router.delete('/api/solicitud/eliminar/:idSolicitud/:idFuncionario', solicitudController.delete);

/** Avance */
router.get('/api/avance/consultar', avanceController.getList);

router.get('/api/avance/consultarId/:idAvance', avanceController.getById);

router.post('/api/avance/', avanceController.add);

router.put('/api/avance/editar', avanceController.update);

router.delete('/api/avance/eliminar/:idAvance/:idFuncionario', avanceController.delete);

/** Reportes */
router.get('/api/reportes/getAvancesProyectos', reportesController.getAvancesProyectos);

router.get('/api/reportes/getProyectosPendientesTerminados', reportesController.getProyectosPendientesTerminados);

router.post('/api/reportes/getSolicitudesRangoFechas/', reportesController.getSolicitudRangoFechas);

router.post('/api/reportes/getBitacoraRangoMeses/', reportesController.getBitacoraRangoMeses);

router.get('/api/reportes/getProyectosCambiosSolicitados', reportesController.getProyectosCambiosSolicitados);

router.post('/api/reportes/getHistoricoAvances/', reportesController.getHistoricoAvances);

/** Sexo */
router.get('/api/sexo/consultar', sexoController.getList);

router.get('/api/sexo/consultarId/:idSexo', sexoController.getById);

router.post('/api/sexo/', sexoController.add);

router.put('/api/sexo/editar', sexoController.update);

router.delete('/api/sexo/eliminar/:idSexo', sexoController.delete);

/** Departamento */
router.get('/api/departamento/consultar', departamentoController.getList);

router.get('/api/departamento/consultarId/:idDepartamento', departamentoController.getById);

router.post('/api/departamento/', departamentoController.add);

router.put('/api/departamento/editar', departamentoController.update);

router.delete('/api/departamento/eliminar/:idDepartamento', departamentoController.delete);

/** Trimestre */
router.get('/api/trimestre/consultar', trimestreController.getList);

router.get('/api/trimestre/consultarId/:idTrimestre', trimestreController.getById);

router.post('/api/trimestre/', trimestreController.add);

router.put('/api/trimestre/editar', trimestreController.update);

router.delete('/api/trimestre/eliminar/:idTrimestre', trimestreController.delete);

/** Transacciones */
router.get('/api/transaccion/consultar', transaccionController.getList);

router.get('/api/transaccion/consultarId/:idTransaccion', transaccionController.getById);

router.post('/api/transaccion/', transaccionController.add);

router.put('/api/transaccion/editar', transaccionController.update);

router.delete('/api/transaccion/eliminar/:idTransaccion', transaccionController.delete);

module.exports = router;