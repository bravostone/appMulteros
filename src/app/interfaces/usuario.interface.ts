export interface Usuario {
  alias: string;
  Numero_documento: string;
  NombreCompleto: string;
  Responsable: number;
  codigo_usuario: number;
  Exito?: boolean;
  Mensaje: string;
  Token?: string;
}