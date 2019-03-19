import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";
import { insertGrupo } from "../interfaces/asignacionGrupo.interface";

@Injectable()
export class AsignacionGrupoService {
  url_InsertGrupo: string =
    "https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/InsertarFormacionEquipos";

  constructor(private http: Http) {
    //console.log("entre al servicio de Grupo");
  }

  insertGrupo(_datos: insertGrupo) {
    let body = JSON.stringify(_datos.Lista);
    let headers = new Headers({
      "Content-Type": "application/json; charset=utf-8"
    });

    return this.http.post(this.url_InsertGrupo, body, { headers }).pipe(
      map(res => {
        return res.json();
      })
    );
  }
}
