import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class AsignacionResponsableService {

  constructor(private http:Http) { }

  DatosURL:string ="";
  
  ObtenerInfoResponsable(){
    let body = JSON.stringify("");
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post(this.DatosURL, body, { headers }).map(res => {
      return res.json();
    });
  }

}
