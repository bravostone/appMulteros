import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { asignacionResponsable } from "../../interfaces/asignacionResponsable.interface";
import { AsignacionResponsableService } from "../../services/asignacion-responsable.service";
import { usuarioInterface } from "../../interfaces/shared/usuario.interface";
import { UsuarioService } from "../../services/shared/usuario.service";
import { formatDate } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-asignacionResponsable",
  templateUrl: "./asignacionResponsable.component.html",
  styles: []
})
export class AsignacionResponsableComponent implements OnInit {
  usuarios: usuarioInterface[] = [];
  // fechaDesde: Date = new Date();
  // fechaHasta: Date = new Date();
  nuevoCodigo: number = 0;
  //asignacion: asignacionResponsable;
  //<fechaHasta = this.fechaDesde.setDate(this.fechaDesde.getDate() + 1);

  asignacion: asignacionResponsable = {
    CodigoUsuarioActual: 0,
    CodigoUsuarioAntiguo: 0,
    NombreCompleto: "pruebin",
    FechaInicioTareo: new Date(),
    FechaFinTareo: new Date()
  };
  // formatDate(this.fechaHasta, "dd/MM/yyyy", "en")
  constructor(
    private _usuarioService: UsuarioService,
    private _AsignacionResponsableService: AsignacionResponsableService,
    private _router: Router
  ) {
    this._usuarioService.obtenerUsuario().subscribe(dataUser => {
      console.log(dataUser);
      this.usuarios = dataUser;
      //console.log(dataUser);
      console.log(this.usuarios);
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
        this.asignacion = dataresp;
        //console.log(this.asignacion)
      });
  }

  ngOnInit() {}

  guardar(nuevoCodigo: number) {
    //debugger;
    //this.asignacion.CodigoUsuarioActual = this.nuevoCodigo;

    //console.log(this.asignacion);
    //console.log(this.usuarios);
    debugger;
    if (Number(nuevoCodigo) == 0) {
      alert("Debe seleccionar un usuario");
      return;
    } else {
      this.asignacion.CodigoUsuarioAntiguo = this.asignacion.CodigoUsuarioActual;
      this.asignacion.CodigoUsuarioActual = Number(nuevoCodigo);

      this._AsignacionResponsableService
        .InsertResponsable(this.asignacion)
        .subscribe(data => { 
          console.log(data)
          alert("Usuario registrado correctamente!")
          this._router.navigate(["/menu"]);
         }, error => console.error(error));
    }

    //this._router.navigate(["/menu"]);
    // if ((this.asignacion.CodigoUsuarioActual = Number("0")))
    // {
    //   alert("oye no esta bien");
    // }
    // else
    // {
    //   this._AsignacionResponsableService
    //     .InsertResponsable(this.asignacion)
    //     .subscribe(data => {}, error => console.error(error));
    // }
  }
}
