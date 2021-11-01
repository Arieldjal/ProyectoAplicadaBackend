const sql = require('mssql');
const config = {
    user: 'loginProyectoAplicada',
    password: '123',
    server: 'localhost',
    database: 'proyectoAplicadaB80064',
    options: {
        trustedconection: false,
        enableArithAbort: true,
        encrypt: false,
    }
};
exports.config = config;
exports.sql = sql;
