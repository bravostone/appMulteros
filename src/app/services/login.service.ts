import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import { map } from "rxjs/operators";
import { LoginObject } from "../interfaces/LoginObject"


@Injectable()
export class LoginService{

    url_LoginAD: string = "https://gymsolucionesdev-multeros.azurewebsites.net/api/Login/Autenticar"

    constructor(private http: Http){
    }

    getLogin(login : LoginObject){

        let body    = JSON.stringify(login);
        let headers = new Headers({
              'Content-Type': 'application/json; charset=utf-8',
          });

          return this.http.post( this.url_LoginAD, body , {headers}).pipe
          (map(res => {
                          return res.json();
                      })
          )
      }
}