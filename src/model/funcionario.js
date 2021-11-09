class Funcionario {
    constructor(idFuncionario, nombre, apellidos, fechaNacimiento, idSexo, foto, loginName, idDepartamento, password) {
        this.idFuncionario = idFuncionario;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.idSexo = idSexo;
        this.foto = foto;
        this.loginName = loginName;
        this.idDepartamento = idDepartamento;
        this.password = password;
    }
}
module.exports = Funcionario;