import { Injectable} from '@angular/core';
import { Http , Headers} from '@angular/http';
import { map } from "rxjs/operators";
import { ReporteRequest } from "../interfaces/reporte.interface"


@Injectable()
export class ReporteService{

    url_reporte: string  = "https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/ReporteSemanalTareo"

    constructor(private http: Http){
        //console.log("entre al servicio de tareo");
    }

    getTareos(_datos : ReporteRequest){
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