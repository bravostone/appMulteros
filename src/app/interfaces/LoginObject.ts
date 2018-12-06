export class LoginObject {
    public Usuario: string;
    public Contrasena: string;
    public domain: string;
    constructor( object: any){
      this.Usuario = (object.username) ? object.username : null;
      this.Contrasena = (object.password) ? object.password : null;
    }
  }