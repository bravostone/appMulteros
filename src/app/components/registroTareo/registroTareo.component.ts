import { Component,OnInit } from '@angular/core';
import { TareoService} from '../../services/registroTareo.service';
import { Tareo, insertTareo  } from '../../interfaces/registroTareo.interface';
import {Router} from '@angular/router'
import { element } from 'protractor';

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

    for (var i = 0; i < myTable.childNodes.length ; i++) {
        var rowItem = myTable.childNodes[i + 1];
        console.log(rowItem);
        lineItems.push({
            // 
            'codeusuario':myTable.childNodes[i].childNodes[2],
            // 'codecombo':rowItem.childNodes[i].childNodes[3].childNodes[0]
        });
        debugger;
    }

    // this._tareo.insertTareo(this.datos).subscribe(
    //   (data: any) =>{
    //     if(data.Exito == true){
    //         // alert("Se grabo de manera correcta!");
    //         console.log("Se grabo de manera correcta!");
    //     }
    //     else{
    //       // alert(data.Mensaje);
    //       console.log("error");
    //     }
    //   }
    // );

  }
}
