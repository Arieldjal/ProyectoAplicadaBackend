const db_conection = require('../config/database.js');
const Departamento = require("../model/departamento");

exports.getList = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getDepartamentos", function (err, result) {

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
}

exports.add = (req, res) => {
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC addDepartamento '" + req.body.descripcion + "'", function (err, result) {

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
    let idDepartamento = req.params.idDepartamento;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getDepartamentoById " + idDepartamento, function (err, result) {

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
    let departamento = {idDepartamento: req.body.idDepartamento, descripcion: req.body.descripcion}
    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {    

            db_conection.sql.query(

                "EXEC updateDepartamento " + departamento.idDepartamento + ",'" + departamento.descripcion + "'", function (err, result) {

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
    let idDepartamento = req.params.idDepartamento;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC deleteDepartamento " + idDepartamento, function (err) {

                    if (err) {
                        res.json(false)
                    } else {
                        res.json(true);
                    }
                });
        }

    });
}