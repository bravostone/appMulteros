import { Component,OnInit } from '@angular/core';
import { TareoService} from '../../services/registroTareo.service';
import { Tareo, insertTareo  } from '../../interfaces/registroTareo.interface';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registroTareo',
  templateUrl: './registroTareo.component.html'
})

export class RegistroTareoComponent implements OnInit {

  opcionSeleccionado: number  = 0;

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

              console.log(this.opcionSeleccionado);
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
    
    // this.datos.Lista[0].CodigoAsistencia = this.opcionSeleccionado;
    // console.log(this.datos.Lista);

    this._tareo.insertTareo(this.datos).subscribe(
      (data: any) =>{
        if(data.Exito == true){
            // alert("Se grabo de manera correcta!");
            console.log("Se grabo de manera correcta!");
        }
        else{
          // alert(data.Mensaje);
          console.log("error");
        }
      }
    );

  }
}
