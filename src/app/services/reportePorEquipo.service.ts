import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { reporteXEquipoFiltro } from '../interfaces/reportePorEquipo.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportePorEquipoService {

  constructor(private http:Http) { }

  ListarURL:string ="https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/ReportePuntajeXEquipo";
  
  ObtenerListaPuntajeXEquipos(_reporteXEquipoFiltro:reporteXEquipoFiltro){
    let body = JSON.stringify(_reporteXEquipoFiltro);
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post(this.ListarURL, body, { headers }).map(res => {
      return res.json();
    });
  }
}