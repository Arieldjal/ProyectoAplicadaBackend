const db_conection = require('../config/database.js');
const Funcionario = require("../model/funcionario");

exports.getList = (req, res) => {

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getFuncionarios", function (err, result) {

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
    let funcionario;
    funcionario = new Funcionario(req.body.idFuncionario, req.body.nombre, req.body.apellidos, req.body.fechaNacimiento, req.body.idSexo,
        req.body.foto, req.body.loginName, req.body.idDepartamento, req.body.password);

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {    

            db_conection.sql.query(

                "EXEC addFuncionario " + funcionario.idFuncionario + ",'" + funcionario.nombre + "','" + funcionario.apellidos + "','"
                + funcionario.fechaNacimiento + "'," + funcionario.idSexo + ",'" + funcionario.foto + "','" + funcionario.loginName + "',"
                + funcionario.idDepartamento + ",'" + funcionario.password + "'", function (err, result) {

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
    let idFuncionario = req.params.idFuncionario;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC getFuncionarioById " + idFuncionario, function (err, result) {

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
    let funcionario;
    funcionario = new Funcionario(req.body.idFuncionario, req.body.nombre, req.body.apellidos, req.body.fechaNacimiento, req.body.idSexo,
        req.body.foto, req.body.loginName, req.body.idDepartamento);

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {    

            db_conection.sql.query(

                "EXEC updateFuncionario " + funcionario.idFuncionario + ",'" + funcionario.nombre + "','" + funcionario.apellidos + "','"
                + funcionario.fechaNacimiento + "'," + funcionario.idSexo + ",'" + funcionario.foto + "','" + funcionario.loginName + "',"
                + funcionario.idDepartamento, function (err, result) {

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
    let idFuncionario = req.params.idFuncionario;

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC deleteFuncionario " + idFuncionario, function (err) {

                    if (err) {
                        res.json(false)
                    } else {
                        res.json(true);
                    }
                });
        }

    });
}