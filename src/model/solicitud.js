class Solicitud {
    constructor(idSolicitud, fechaInicio, fechaFin, documentoActaConstitutiva, idUsuarioAplicativo, idResponsableTI, idResponsableUsuarioFinal, terminado, nombreProyecto) {
        this.idSolicitud = idSolicitud;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.documentoActaConstitutiva = documentoActaConstitutiva;
        this.idUsuarioAplicativo = idUsuarioAplicativo;
        this.idResponsableTI = idResponsableTI;
        this.idResponsableUsuarioFinal = idResponsableUsuarioFinal;
        this.terminado = terminado;
        this.nombreProyecto = nombreProyecto;
    }
}
module.exports = Solicitud;