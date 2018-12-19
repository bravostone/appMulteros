import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Usuario } from "../interfaces/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class ComodinService {

  constructor(private http:Http) { }

  InsertarURL:string = "https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/InsertarComodin";

  InsertComodin(_usuario: Usuario){
    let body = JSON.stringify(_usuario);
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post(this.InsertarURL, body, { headers }).map(res => {
      return res.json();
    });
  }

}
