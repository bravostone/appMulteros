import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { asignacionResponsable } from "../../interfaces/asignacionResponsable.interface";
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

  private asignacion: asignacionResponsable = {
    codigo_usuario_responsable_actual: "8",
    codigo_usuario_responsable_anterior: "Katiuska",
    fecha_inicio_tareo: formatDate(this.fechaDesde, "dd/MM/yyyy", "en"),
    fecha_fin_tareo: formatDate(this.fechaHasta, "dd/MM/yyyy", "en")
  };

  constructor(private _usuarioService: UsuarioService) {
    this._usuarioService.obtenerUsuario().subscribe(data => {
      this.usuarios = data;
      console.log(data);
    });
  }

  ngOnInit() {}

  guardar() {
    alert(this.asignacion.codigo_usuario_responsable_actual);
  }
}
