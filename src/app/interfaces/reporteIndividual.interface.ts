export interface ReporteIndividualRequest{
    YearActual: number;
    SemanaActual: number;
    MesActual: number;
}

export interface ReporteIndividualResponse{
    NombreCompleto: string;
    puntos_mes: string;    
}