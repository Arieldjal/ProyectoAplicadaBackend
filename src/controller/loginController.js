const db_conection = require('../config/database.js');
const User = require("../model/user");


exports.login = (req, res) => {
    let user = new User(req.body.loginName, req.body.password)

    db_conection.sql.connect(db_conection.config, function (err) {

        if (err) {
            console.log(err);
        } else {

            db_conection.sql.query(

                "EXEC loginFuncionario '" + user.loginName + "','" + user.password + "'", function (err, result) {

                    if (err) {
                        console.log(err);
                    } else {
                        if (!result.recordset[0]) {
                            res.json(false);
                        } else {
                            let userData = { userExists: true, data: result.recordset[0] }
                            res.json(userData);
                        }
                    }
                });
        }

    });
};
