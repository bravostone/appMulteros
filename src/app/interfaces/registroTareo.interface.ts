export interface Tareo {
  dia?: string;
  responsable?: string;
  listaUsuario?: [];
  listaAsistencia?: [];
}

export interface insertTareo {
  Lista: {
    codigo_usuario?: number;
    codigo_asistencia?: number;
    usuario_creacion?:string;
    terminal_creacion?:string;
  }[];
}
