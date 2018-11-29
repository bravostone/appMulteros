import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-asignacionResponsable',
    templateUrl: './asignacionResponsable.component.html'
})

export class AsignacionResponsableComponent implements OnInit {

usuario: string = "Piero";
fecha_inicio: string = "03/12/2018";
fecha_fin: string = "07/12/2018";

    constructor() {
     }
  
    ngOnInit() {
   
    }

    guardar()
    {
        alert(this.usuario);
    }
  }