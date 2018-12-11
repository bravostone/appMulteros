export interface ReporteIndividualRequest{
    YearActual: number;
    SemanaActual: number;
    MesActual: number;
}

export interface ReporteResponse{
    NombreCompleto: string;
    puntos_mes: string;    
}