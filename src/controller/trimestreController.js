const db_conection = require('../config/database.js');

exports.getList = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getTrimestres", function (err, result) {

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
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC addTrimestre '" + req.body.descripcion + "'", function (err, result) {

                    if (err) {
                        res.json(false)
                    } else {
                        res.json(true);
                    }
                });
        }

    });
}

exports.getById = (req, res) => {
    let idTrimestre = req.params.idTrimestre;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getTrimestreById " + idTrimestre, function (err, result) {

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
    let trimestre = {idTrimestre: req.body.idTrimestre, descripcion: req.body.descripcion}
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {    

            db_conection.sql.query(

                "EXEC updateTrimestre " + trimestre.idTrimestre + ",'" + trimestre.descripcion + "'", function (err, result) {

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
    let idTrimestre = req.params.idTrimestre;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC deleteTrimestre " + idTrimestre, function (err) {

                    if (err) {
                        res.json(false)
                    } else {
                        res.json(true);
                    }
                });
        }

    });
}