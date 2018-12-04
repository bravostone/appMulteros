import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { asignacionResponsable } from "../../interfaces/asignacionResponsable.interface";
import { AsignacionResponsableService } from '../../services/asignacion-responsable.service';
import { usuarioInterface } from "../../interfaces/shared/usuario.interface";
import { UsuarioService } from "../../services/shared/usuario.service";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-asignacionResponsable",
  templateUrl: "./asignacionResponsable.component.html"
})
export class AsignacionResponsableComponent implements OnInit {
  usuarios: any[] = [];
  fechaDesde: Date = new Date();
  fechaHasta: Date = new Date();

  //<fechaHasta = this.fechaDesde.setDate(this.fechaDesde.getDate() + 1);

  asignacion: asignacionResponsable = {
    CodigoUsuarioActual: 8,
    CodigoUsuarioAntiguo: 0,
    NombreCompleto: "pruebin",
    FechaInicioTareo: this.fechaDesde,
    FechaFinTareo: this.fechaHasta
  };
  // formatDate(this.fechaHasta, "dd/MM/yyyy", "en")
  constructor(private _usuarioService: UsuarioService, private _AsignacionResponsableService:AsignacionResponsableService) {
    this._usuarioService.obtenerUsuario().subscribe(data => {
      this.usuarios = data;
      console.log(data);
    });

    this._AsignacionResponsableService.ObtenerInfoResponsable()
      .subscribe(data => {
        data.CodigoUsuarioAntiguo = 2;
        this.asignacion = data;
        console.log(data);
      })
  }

  ngOnInit() {}

  guardar() {
    alert(this.asignacion.NombreCompleto);
  }
}
