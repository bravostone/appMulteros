export interface ReporteIndividualRequest{
    YearActual: number;
    SemanaActual: number;
    MesActual: number;
}

export interface ReporteIndividualResponse{
    NombreCompleto: string;
    Puntos_mes: string; 
    Mes: string;
    Puntos_comodin_multa: string;
    Puntos_multa: string;
    Puntos_comodin: string;

}
export interface ReporteIndividualPuntos{
    name: string;
    data: number[];
    color: string;

}
export interface ReporteIndividualSelect{
    codigo: number;
    nombre: string;    
}