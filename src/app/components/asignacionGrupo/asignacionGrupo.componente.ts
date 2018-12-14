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
    droppedItems: usuarioInterface[] = [];
       
    constructor(private _usuarioService: UsuarioService,
            private router : Router) {}
    
    removeItem(item: any, list: Array<any>) {
        let index = list.map(function (e) {
            return e.title
        }).indexOf(item.title);
        list.splice(index, 1);
        }
              
    onItemDrop(e: any) {
        debugger;
                // Get the dropped data here
                this.droppedItems.push(e.dragData);
                this.removeItem(e.dragData, this.usuarios);
    }

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