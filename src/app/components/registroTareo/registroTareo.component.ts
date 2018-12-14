import { Component,OnInit } from '@angular/core';
import { TareoService} from '../../services/registroTareo.service';
import { Tareo, insertTareo  } from '../../interfaces/registroTareo.interface';
import {Router} from '@angular/router'
import { element } from 'protractor';
import * as $ from 'jquery';

@Component({
  selector: 'app-registroTareo',
  templateUrl: './registroTareo.component.html'
})

export class RegistroTareoComponent implements OnInit {
 
  bandeja:Tareo = {
    dia: "",
    responsable: "",
    listaUsuario: [],
    listaAsistencia: []
  };

  datos:insertTareo = {
    Lista : [
      { "CodigoUsuario": 0, "CodigoAsistencia": 0}
   ]
  };

  constructor(private _tareo : TareoService,
              private router : Router) {
   }

  ngOnInit() {
    this.getDatos();
  }

  getDatos(){

    this._tareo.getIndex().subscribe(
      (data: any) =>{
        if(data.Exito == true){
          this.bandeja.dia             = data.FechaActual;
          this.bandeja.responsable     = data.Responsable.NombreCompleto;
          this.bandeja.listaUsuario    = data.Usuarios;
          this.bandeja.listaAsistencia = data.Asistencias;
        }
        else{
          alert(data.Mensaje);
        }
      }
    );

  }

  insertDatos(){

    let lineItems: any = [];
    let myTable = document.getElementById("tblValues");
    lineItems.length = 0;
    
    var table = myTable.childNodes[1];

    for(var i = 0; i < table.childNodes.length - 1 ; i++ )
    {
      var rowItem = table.childNodes[i + 1];
      lineItems.push({
        'CodigoUsuario': $(rowItem).find('td:gt(0)').first().text(),
        'CodigoAsistencia'  : $(rowItem).find('td:gt(2)').find("select").val()
      });
    }
 
    this.datos.Lista = lineItems;

     this._tareo.insertTareo(this.datos).subscribe(
       (data: any) =>{
         if(data.Exito == true){
             alert(data.Mensaje);
         }
         else{
           alert(data.Mensaje);
         }
       }
     );

  }
}
