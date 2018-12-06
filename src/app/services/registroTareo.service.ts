import { Injectable} from '@angular/core';
import { Http , Headers} from '@angular/http';
import { map } from "rxjs/operators";
import { insertTareo} from "../interfaces/registroTareo.interface"


@Injectable()
export class TareoService{

    url_IndexTareo: string  = "https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/ListarTareo"
    url_InsertTareo: string = "https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/InsertarTareo"

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

    insertTareo( _datos : insertTareo){
        debugger;
        let body    = JSON.stringify( _datos.Lista);
        let headers = new Headers({
                                      'Content-Type': 'application/json; charset=utf-8',
                                  });

        return this.http.post( this.url_InsertTareo,body,{headers}).pipe
                                  (map(res => {
                                                  return res.json();
                                              })
                                  )
    }
}