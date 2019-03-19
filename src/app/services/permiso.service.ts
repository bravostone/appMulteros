import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { usuarioAsistencia } from "../interfaces/shared/usuarioAsistencia.interface";

@Injectable({
  providedIn: "root"
})
export class PermisoService {
  constructor(private http: Http) {}

  InsertarURL: string =
    "https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/InsertarPermiso";

  InsertPermiso(_usuario: usuarioAsistencia) {
    let body = JSON.stringify(_usuario);
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post(this.InsertarURL, body, { headers }).map(res => {
      return res.json();
    });
  }
}
