import { Component, OnInit } from "@angular/core";
import { TareoService } from "../../services/registroTareo.service";
import { Tareo, insertTareo } from "../../interfaces/registroTareo.interface";
import { Router } from "@angular/router";
import { Usuario } from "../../interfaces/usuario.interface";
import { StorageService } from "../../services/storage.service";
import * as $ from "jquery";

@Component({
  selector: "app-registroTareo",
  templateUrl: "./registroTareo.component.html",
  styleUrls: ["./registroTareo.component.css"]
})
export class RegistroTareoComponent implements OnInit {
  user: Usuario;
  bandeja: Tareo = {
    dia: "",
    responsable: "",
    listaUsuario: [],
    listaAsistencia: []
  };

  datos: insertTareo = {
    Lista: [
      {
        codigo_usuario: 0,
        codigo_asistencia: 0,
        usuario_creacion: "",
        terminal_creacion: ""
      }
    ]
  };

  fecha: any = {
    mesNombre: ""
  };

  constructor(
    private _tareo: TareoService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
    this.getFecha();
    this.getDatos();
  }

  getFecha() {
    var objDate = new Date(),
      locale = "es-PE",
      month = objDate.toLocaleString(locale, { month: "long" });
    this.fecha.mesNombre = month;
  }

  getDatos() {
    this._tareo.getIndex().subscribe((data: any) => {
      if (data.Exito == true) {
        this.bandeja.dia = data.FechaActual;
        this.bandeja.responsable = data.Responsable.NombreCompleto;
        this.bandeja.listaUsuario = data.Usuarios;
        this.bandeja.listaAsistencia = data.Asistencias;
      } else {
        alert(data.Mensaje);
      }
    });
  }

  insertDatos() {
    let lineItems: any = [];
    let myTable = document.getElementById("tblValues");
    lineItems.length = 0;

    var table = myTable.childNodes[1];

    for (var i = 0; i < table.childNodes.length - 1; i++) {
      var rowItem = table.childNodes[i + 1];
      if (
        $(rowItem)
          .find("td:gt(2)")
          .find("select")
          .val() != "0"
      ) {
        lineItems.push({
          codigo_usuario: $(rowItem)
            .find("td:gt(0)")
            .first()
            .text(),
          codigo_asistencia: $(rowItem)
            .find("td:gt(2)")
            .find("select")
            .val(),
          usuario_creacion: this.user.alias,
          terminal_creacion: ""
        });
      }
    }

    this.datos.Lista = lineItems;

    this._tareo.insertTareo(this.datos).subscribe((data: any) => {
      if (data.Exito == true) {
        this.getDatos();
        alert(data.Mensaje);
      } else {
        alert(data.Mensaje);
      }
    });
  }
}
