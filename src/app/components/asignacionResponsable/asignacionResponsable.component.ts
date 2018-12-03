import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { asignacionResponsable } from '../../interfaces/asignacionResponsable.interface';

@Component({
    selector: 'app-asignacionResponsable',
    templateUrl: './asignacionResponsable.component.html'
})

export class AsignacionResponsableComponent implements OnInit {

    private asignacion:asignacionResponsable = {
        codigo_usuario_responsable_actual : "Piero",
        codigo_usuario_responsable_anterior : "Katiuska",
        fecha_inicio_tareo :"03/12/2018",
        fecha_fin_tareo : "07/12/2018"
    }

    constructor() {
     }
  
    ngOnInit() {
   
    }

    guardar()
    {
        alert(this.asignacion.codigo_usuario_responsable_actual);
    }
  }