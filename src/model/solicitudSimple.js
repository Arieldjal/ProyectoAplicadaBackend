class SolicitudSimple {
    constructor(idSolicitud, nombreProyecto, fechaInicio, fechaFin, terminado, AvanceList) {
        this.IdSolicitud = idSolicitud;
        this.NombreProyecto = nombreProyecto
        this.FechaInicio = fechaInicio;
        this.FechaFin = fechaFin;
        this.Terminado = terminado;
        this.AvanceList = AvanceList;
    }
}
module.exports = SolicitudSimple;