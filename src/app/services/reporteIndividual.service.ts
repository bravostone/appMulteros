import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import { map } from "rxjs/operators";
import { ReporteIndividualRequest } from "../interfaces/reporteIndividual.interface";

@Injectable()
export class ReporteIndividualService {

    url_reporte: string  = "https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/ReportePuntajeIndividual";
    constructor(private http: Http){
        console.log("entre al servicio de tareo");
    }

    getReporteIndividual(_datos : ReporteIndividualRequest){

        let body    = JSON.stringify( _datos);
        let headers = new Headers({
                                      'Content-Type': 'application/json; charset=utf-8',
                                  });

        return this.http.post( this.url_reporte,body,{headers}).pipe
                                  (map(res => {
                                                  return res.json();
                                              })
                                  )
    }
}