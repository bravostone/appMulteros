import { Component,OnInit } from '@angular/core';
import { usuarioInterface } from "../../interfaces/shared/usuario.interface";
import { UsuarioService } from "../../services/shared/usuario.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-asignacionGrupo',
    templateUrl: './asignacionGrupo.component.html'
})

export class AsignacionGrupoComponent implements OnInit {

    usuarios: usuarioInterface[] = [];

    dropGrupoA: usuarioInterface[] = [];
    dropGrupoB: usuarioInterface[] = [];
    dropGrupoC: usuarioInterface[] = [];
       
    constructor(private _usuarioService: UsuarioService,
            private router : Router) {}
    
    removeItem(item: any, list: Array<any>) {
        let index = list.map(function (e) {
            return e.title
        }).indexOf(item.title);
        list.splice(index, 1);
        }
              
    onItemDropGrupoA(e: any) {
        debugger;
        this.dropGrupoA.push(e.dragData);
        this.removeItem(e.dragData, this.usuarios);
    }

    onItemDropGrupoB(e: any) {
        debugger;
        this.dropGrupoB.push(e.dragData);
        this.removeItem(e.dragData, this.usuarios);
    }

    onItemDropGrupoC(e: any) {
        debugger;
        this.dropGrupoC.push(e.dragData);
        this.removeItem(e.dragData, this.usuarios);
    }

    ngOnInit() {
       this.getDatos();
    }

    getDatos(){
        this._usuarioService.obtenerUsuario().subscribe(dataUser => {
            this.usuarios = dataUser;
            });
    }

    insertGrupos(){

    }
  }