import { Component,OnInit } from '@angular/core';
import { TareoService} from '../../services/registroTareo.service';
import { Tareo} from '../../interfaces/registroTareo.interface';
import {Router} from '@angular/router'

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

  constructor(private _tareo : TareoService,
              private router : Router) {
   }

  ngOnInit() {
    this.getDatos();
  }

  getDatos(){

    this._tareo.getIndex().subscribe(
      (data: any) =>{
        if(data.Success == true){
          this.bandeja.dia             = data.FechaActual;
          this.bandeja.responsable     = data.Responsable.nombre;
          this.bandeja.listaUsuario    = data.Usuarios;
          this.bandeja.listaAsistencia = data.Asistencias;

          //console.log(this.bandeja.listaUsuario    = data.Usuarios);
        }
        else{
          alert(data.Message);
        }
      }
    );

  }
}
