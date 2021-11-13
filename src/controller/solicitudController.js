const db_conection = require('../config/database.js');
const Solicitud = require("../model/solicitud");

exports.getList = (req, res) => {
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getSolicitudes", function (err, result) {

                    if (err) {
                        console.log(err);
                    } else {
                        if (!result.recordset[0]) {
                            res.json(false);
                        } else {
                            res.json(result.recordset);
                        }
                    }
                });
        }

    });
};

exports.add = (req, res) => {
    let solicitud;
    solicitud = new Solicitud(req.body.idSolicitud, req.body.fechaInicio, req.body.fechaFin, req.body.documentoActaConstitutiva,
        req.body.idUsuarioAplicativo, req.body.idResponsableTI, req.body.idResponsableUsuarioFinal);

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {    

            db_conection.sql.query(

                "EXEC addSolicitud " + solicitud.idSolicitud + ",'" + solicitud.fechaInicio + "','" + solicitud.fechaFin + "','"
                + solicitud.documentoActaConstitutiva + "'," + solicitud.idUsuarioAplicativo + "," + solicitud.idResponsableTI + "," 
                + solicitud.idResponsableUsuarioFinal, function (err, result) {

                    if (err) {
                        console.log(err);
                        res.json(false)
                    } else {
                        res.json(true);
                    }
                });
        }

    });
}

exports.getById = (req, res) => {
    let idSolicitud = req.params.idSolicitud;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getSolicitudById " + idSolicitud, function (err, result) {

                    if (err) {
                        res.json(false)
                    } else {
                        res.json(result.recordset[0]);
                    }
                });
        }

    });
}

exports.update = (req, res) => {
    let solicitud;
    solicitud = new Solicitud(req.body.idSolicitud, req.body.fechaInicio, req.body.fechaFin, req.body.documentoActaConstitutiva,
        req.body.idUsuarioAplicativo, req.body.idResponsableTI, req.body.idResponsableUsuarioFinal);

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {    

            db_conection.sql.query(

                "EXEC updateSolicitud " + solicitud.idSolicitud + ",'" + solicitud.fechaInicio + "','" + solicitud.fechaFin + "','"
                + solicitud.documentoActaConstitutiva + "'," + solicitud.idUsuarioAplicativo + "," + solicitud.idResponsableTI + "," 
                + solicitud.idResponsableUsuarioFinal, function (err, result) {

                    if (err) {
                        console.log(err);
                        res.json(false)
                    } else {
                        res.json(true);
                    }
                });
        }

    });
}

exports.delete = (req, res) => {
    let idSolicitud = req.params.idSolicitud;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC deleteSolicitud " + idSolicitud, function (err) {

                    if (err) {
                        res.json(false)
                    } else {
                        res.json(true);
                    }
                });
        }

    });
}

exports.getSimpleList = (req, res) => {
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getMainSolicitudesData", function (err, result) {

                    if (err) {
                        console.log(err);
                    } else {
                        if (!result.recordset[0]) {
                            res.json(false);
                        } else {
                            res.json(result.recordset);
                        }
                    }
                });
        }

    });
};