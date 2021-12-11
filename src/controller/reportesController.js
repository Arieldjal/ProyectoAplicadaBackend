const db_conection = require('../config/database.js');

exports.getAvancesProyectos = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getAvancesProyectos", function (err, result) {

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

exports.getProyectosPendientesTerminados = (req, res) => {
    var list = [];

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getProyectosPendientes", function (err, result) {
                    list.push(result.recordset[0])

                    db_conection.sql.query(
                        "EXEC getProyectosTerminados", function (err, result) {
                            list.push(result.recordset[0])

                            res.json(list);
                        }
                    )
                });
        }
    });
};

exports.getSolicitudRangoFechas = (req, res) => {
    let fechaInicio = req.body.fechaInicio;
    let fechaFin = req.body.fechaFin;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getSolicitudRangoFechas '" + fechaInicio + "','" + fechaFin + "'", function (err, result) {

                    if (err) {
                        res.json(false)
                    } else {
                        res.json(result.recordset);
                    }
                });
        }

    });
}

exports.getBitacoraRangoMeses = (req, res) => {
    let mesInicio = req.body.mesInicio;
    let mesFin = req.body.mesFin;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getBitacoraRangoMeses '" + mesInicio + "', '" + mesFin + "'", function (err, result) {

                    if (err) {
                        res.json(false)
                    } else {
                        res.json(result.recordset);
                    }
                });
        }

    });
}

exports.getProyectosCambiosSolicitados = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getProyectosCambiosSolicitados", function (err, result) {

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

exports.getHistoricoAvances = (req, res) => {
    let trimestre = null;
    let proyecto = null;

    if(typeof req.body.trimestre !== 'undefined' && req.body.trimestre){
        trimestre = req.body.trimestre;
    }
    
    if(typeof req.body.proyecto !== 'undefined' && req.body.proyecto){
        proyecto = req.body.proyecto;
    }

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getHistoricoAvanceTrimestral " + trimestre + ", " + proyecto + "", function (err, result) {

                    if (err) {
                        res.json(false)
                    } else {
                        res.json(result.recordset);
                    }
                });
        }

    });
}