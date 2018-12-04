import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import { map } from "rxjs/operators";


@Injectable()
export class TareoService{

    url_IndexTareo: string = "https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/ListarTareo"

    constructor(private http: Http){
        //console.log("entre al servicio de tareo");
    }

    getIndex(){
        let headers = new Headers({
                                      'Content-Type': 'application/json; charset=utf-8',
                                  });

        return this.http.post( this.url_IndexTareo,{headers}).pipe
                                  (map(res => {
                                                  return res.json();
                                              })
                                  )
    }
}


export interface Tareo{
    Sucess?: string;
    Message?: string;
    Usuarios?: [];
    Asistencias?: [];
    Responsable?: string;
    FechaHoy?: string;
}