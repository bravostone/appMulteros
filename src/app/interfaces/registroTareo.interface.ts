export interface Tareo{
    dia?: string;
    responsable?: string;
    listaUsuario?: [];
    listaAsistencia?: [];
}

export interface insertTareo{
    Lista : { 
                CodigoUsuario?: number, 
                CodigoAsistencia?: number 
            }[]
}