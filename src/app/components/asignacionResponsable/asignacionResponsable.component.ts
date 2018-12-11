import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { asignacionResponsable } from "../../interfaces/asignacionResponsable.interface";
import { AsignacionResponsableService } from "../../services/asignacion-responsable.service";
import { usuarioInterface } from "../../interfaces/shared/usuario.interface";
import { UsuarioService } from "../../services/shared/usuario.service";
import { formatDate, getLocaleDateFormat } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { StorageService } from "../../services/storage.service";
import { Usuario } from "../../interfaces/usuario.interface";

@Component({
  selector: "app-asignacionResponsable",
  templateUrl: "./asignacionResponsable.component.html",
  styles: []
})
export class AsignacionResponsableComponent implements OnInit {
  usuarios: usuarioInterface[] = [];
  nuevoCodigo: number = 0;
  user: Usuario;

  asignacion: asignacionResponsable = {
    CodigoUsuarioActual: 1,
    CodigoUsuarioAntiguo: 0,
    NombreCompleto: "prueba",
    FechaInicioTareo: this.CalcularLunes(),
    FechaFinTareo: this.CalcularViernes()
  };
  // formatDate(this.fechaHasta, "dd/MM/yyyy", "en")
  constructor(
    private _usuarioService: UsuarioService,
    private _AsignacionResponsableService: AsignacionResponsableService,
    private _router: Router,
    private _storageService: StorageService) 
    
    {
    this._usuarioService.obtenerUsuario().subscribe(dataUser => {
      this.usuarios = dataUser;
    });

    this._AsignacionResponsableService
      .ObtenerInfoResponsable()
      .subscribe(dataresp => {
        //console.log(dataresp);
        // for (let index = 0; index < this.usuarios.length; index++) {
        //   if (this.usuarios[index].codigo_usuario = dataresp.CodigoUsuarioActual)
        //   {
        //     dataresp.NombreCompleto = this.usuarios[index].nombre;
        //   }
        // }
        //dataresp.CodigoUsuarioAntiguo = dataresp.CodigoUsuarioActual;
        //dataresp.CodigoUsuarioActual = 0;

        if (Number(dataresp.CodigoUsuarioActual) != 0) {
          this.asignacion = dataresp;
        }
        //this.asignacion = dataresp;
        //console.log(dataresp);
      });
  }

  ngOnInit() {
    this.user = this._storageService.getCurrentUser();
    this.asignacion.NombreCompleto = this.user.NombreCompleto;
    this.asignacion.CodigoUsuarioActual = this.user.codigo_usuario;
  }

  CalcularLunes(): Date {
    let fechaActual: Date = new Date();
    fechaActual.setDate(fechaActual.getDate() + (8 - fechaActual.getDay()));
    return fechaActual;
  }

  CalcularViernes(): Date {
    let fechaActual: Date = new Date();
    fechaActual.setDate(fechaActual.getDate() + (12 - fechaActual.getDay()));
    return fechaActual;
  }

  guardar(nuevoCodigo: number) {
    if (Number(nuevoCodigo) == 0) {
      alert("Debe seleccionar un usuario");
      return;
    } else {
      this.asignacion.CodigoUsuarioAntiguo = this.asignacion.CodigoUsuarioActual;
      this.asignacion.CodigoUsuarioActual = Number(nuevoCodigo);

      this._AsignacionResponsableService
        .InsertResponsable(this.asignacion)
        .subscribe(
          data => {
            //console.log(data);
            alert("Usuario registrado correctamente!");
            this._router.navigate(["/menu"]);
          },
          error => console.error(error)
        );
    }
  }
}
