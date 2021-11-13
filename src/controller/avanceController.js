const db_conection = require('../config/database.js');
const Avance = require("../model/avance");
const SolicitudSimple = require("../model/solicitudSimple");

exports.getList = (req, res) => {
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
                            var list = [];

                            for (var i = 0; i < result.recordset.length; i++) {
                                list.push(new SolicitudSimple(result.recordset[i].IdSolicitud, result.recordset[i].FechaInicio, result.recordset[i].FechaFin))
                            }

                            db_conection.sql.query(
                                "EXEC getAvances", function (err, result) {
                                    
                                    //Agrega los avances a cada una de las solicitudes a las que pertenecen
                                    for (var i = 0; i < list.length; i++) {
                                        var avancesList = [];
                                        for (var j = 0; j < result.recordset.length; j++) {

                                            if (result.recordset[j].IdSolicitud == list[i].IdSolicitud) {
                                                avancesList.push(result.recordset[j]);
                                            } else {
                                                result.recordset.splice(0, j);
                                                break;
                                            }
                                        }
                                        //Si no tiene avances pone el atributo en nulo
                                        if(avancesList.length==0){
                                            list[i].AvanceList = null;
                                        } else {
                                            list[i].AvanceList = avancesList;
                                        }
                                        
                                    }

                                    res.json(list);
                                })
                        }
                    }
                });
        }

    });
};

exports.add = (req, res) => {
    let avance;
    avance = new Avance(req.body.idAvance, req.body.documento, req.body.idUsuarioAplicativo, req.body.idSolicitud);

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC addAvance " + avance.idAvance + ",'" + avance.documento + "'," + avance.idUsuarioAplicativo + "," + avance.idSolicitud, function (err, result) {

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
    let idAvance = req.params.idAvance;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getAvanceById " + idAvance, function (err, result) {

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
    let avance;
    avance = new Avance(req.body.idAvance, req.body.documento, req.body.idUsuarioAplicativo);

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC updateAvance " + avance.idAvance + ",'" + avance.documento + "'," + avance.idUsuarioAplicativo, function (err, result) {

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
    
    let idAvance = req.params.idAvance;
    
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC deleteAvance " + idAvance, function (err) {

                    if (err) {
                        res.json(false)
                    } else {
                        res.json(true);
                    }
                });
        }

    });
}
