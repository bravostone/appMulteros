import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import { map } from "rxjs/operators";


@Injectable()
export class TareoService{

    url_ResgistroTareo: string = ""

    constructor(private http: Http){
    }

    // getLogin(login : Login){

    //     let body    = JSON.stringify( login);
    //     let headers = new Headers({
    //           'Content-Type': 'application/json; charset=utf-8',
    //       });

    //       return this.http.post( this.url_LoginAD, body , {headers}).pipe
    //       (map(res => {
    //                       return res.json();
    //                   })
    //       )
    //   }
}