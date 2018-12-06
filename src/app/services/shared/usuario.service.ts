import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
//import "rxjs/Rx";
import { usuarioInterface } from '../../interfaces/shared/usuario.interface';

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
UsuarioURL: string = "https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/ListarUsuarios";

  constructor(private http:Http) { }

  obtenerUsuario(){
    let body = JSON.stringify("");
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post(this.UsuarioURL, body, { headers }).map(res => {
      //console.log(res.json());
      return res.json();
    });
  }
}