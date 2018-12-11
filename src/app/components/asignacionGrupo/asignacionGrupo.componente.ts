import { Component,OnInit } from '@angular/core';
import { usuarioInterface } from "../../interfaces/shared/usuario.interface";
import { UsuarioService } from "../../services/shared/usuario.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-asignacionGrupo',
    templateUrl: './asignacionGrupo.component.html'//,
    // styleUrls: ['./asignacionGrupo.component.css']
})

export class AsignacionGrupoComponent implements OnInit {

    usuarios: usuarioInterface[] = [];
        
    constructor(private _usuarioService: UsuarioService,
            private router : Router) {}
  
    ngOnInit() {
       this.getDatos();
    }

    getDatos(){
        debugger;
        this._usuarioService.obtenerUsuario().subscribe(dataUser => {
            this.usuarios = dataUser;
            console.log(dataUser);
            });
    }

    insertGrupos(){

    }
  }