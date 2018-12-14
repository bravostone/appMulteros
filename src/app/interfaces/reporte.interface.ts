export interface ReporteRequest{
    YearActual: number;
    SemanaActual: number;
}

export interface ReporteResponse{
    NombreCompleto: string;
    Lunes: string;
    Martes: string;
    Miercoles: string;
    Jueves: string;
    Viernes: string;
}