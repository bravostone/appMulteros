import { Component,OnInit } from '@angular/core';
import { usuarioInterface } from "../../interfaces/shared/usuario.interface";
import { insertGrupo } from '../../interfaces/asignacionGrupo.interface';
import { UsuarioService } from "../../services/shared/usuario.service";
import { AsignacionGrupoService} from "../../services/asignacionGrupos.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-asignacionGrupo',
    templateUrl: './asignacionGrupo.component.html'
})

export class AsignacionGrupoComponent implements OnInit {

    datos:insertGrupo = {
        Lista : []
      };

    fecha: any = {
        mesNombre: ""
      }

    usuarios: usuarioInterface[] = [];
    
    dropGrupoA: usuarioInterface[] = [];
    dropGrupoB: usuarioInterface[] = [];
    dropGrupoC: usuarioInterface[] = [];
       
    constructor(private _usuarioService: UsuarioService,
                private _asignar: AsignacionGrupoService,
                private router : Router) {}

    removeItem(item: any, list: Array<any>) {
        let index = list.indexOf(item);
        list.splice(index, 1);
        }
              
    onItemDropGrupoA(e: any) {
        this.dropGrupoA.push(e.dragData);
        this.removeItem(e.dragData, this.usuarios);
    }

    onItemDropGrupoB(e: any) {
        this.dropGrupoB.push(e.dragData);
        this.removeItem(e.dragData, this.usuarios);
    }

    onItemDropGrupoC(e: any) {
        this.dropGrupoC.push(e.dragData);
        this.removeItem(e.dragData, this.usuarios);
    }

    ngOnInit() {
       this.getDatos();
       this.getFecha();
    }

    getFecha(){
        var objDate = new Date(),
        locale = "es-PE",
        month = objDate.toLocaleString(locale, { month: "long" });
        this.fecha.mesNombre = month;
        }

    getDatos(){
        this._usuarioService.obtenerUsuario().subscribe(dataUser => {
            this.usuarios = dataUser;
            });
    }
    
    cleanGrupos(){
        this.dropGrupoA = [];
        this.dropGrupoB = [];
        this.dropGrupoC = [];
        this.getDatos();
    }

    insertGrupos(){

        this.dropGrupoA.forEach(element => {
            this.datos.Lista.push({
                CodigoUsuario : element.codigo_usuario,
                NombreEquipo  : "Equipo A",
                Mes           : new Date().getMonth() +1,
                Anio          : new Date().getFullYear()
            })
        });

        this.dropGrupoB.forEach(element => {
            this.datos.Lista.push({
                CodigoUsuario : element.codigo_usuario,
                NombreEquipo  : "Equipo B",
                Mes           : new Date().getMonth() +1,
                Anio          : new Date().getFullYear()
            })
        });

        this.dropGrupoC.forEach(element => {
            this.datos.Lista.push({
                CodigoUsuario : element.codigo_usuario,
                NombreEquipo  : "Equipo C",
                Mes           : new Date().getMonth() +1,
                Anio          : new Date().getFullYear()
            })
        });

        this._asignar.insertGrupo(this.datos).subscribe(
           (data: any) =>{
             if(data.Exito == true){
                 this.cleanGrupos();
                 alert(data.Mensaje);
             }
             else{
               alert(data.Mensaje);
             }
           }
         );
    }
  }