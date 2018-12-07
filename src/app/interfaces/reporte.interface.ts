export interface ReporteRequest{
    YearActual: number;
    SemanaActual: number;
}

export interface ReporteResponse{
    NombreCompleto: string;
    TipoAsistencia: string;
    NombreDiaSemana: string;
}