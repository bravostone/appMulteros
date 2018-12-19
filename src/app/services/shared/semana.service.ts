import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import { map } from "rxjs/operators";
import { Semana } from "../../interfaces/shared/semana.interface"


@Injectable()
export class SemanaService{

    url: string = "https://gymsolucionesdev-multeros.azurewebsites.net/api/Tareo/ListarSemanas"

    constructor(private http: Http){
    }

    getSemana(){
        let headers = new Headers({
              'Content-Type': 'application/json; charset=utf-8',
          });

          return this.http.post( this.url , {headers}).pipe
          (map(res => {
                          return res.json();
                      })
          )
      }
}