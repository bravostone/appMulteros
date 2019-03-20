import { Component, OnInit } from "@angular/core";
import { StorageService } from "../../services/storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ComodinService } from "../../services/comodin.service";
import { Usuario } from "../../interfaces/usuario.interface";
import { usuarioAsistencia } from "../../interfaces/shared/usuarioAsistencia.interface";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
  selector: "app-reloj",
  templateUrl: "./reloj.component.html",
  styleUrls: ["./reloj.component.css"]
})
export class RelojComponent implements OnInit {
  horas: number;
  minutos: number;
  segundos: number;
  pSaludo: string;
  user: Usuario;
  asistencia: usuarioAsistencia;

  constructor(
    private _comodinService: ComodinService,
    private _router: Router,
    private storageService: StorageService,
    private loadingBar: LoadingBarService
  ) {}

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
    this.asistencia = {
      codigo_usuario: 1,
      usuario_creacion: "",
      terminal_creacion: ""
    };

    this.ActualizarHora();
    setInterval(() => {
      this.ActualizarHora();
    }, 1000);
  }

  startLoading() {
    this.loadingBar.start();
  }
  stopLoading() {
    this.loadingBar.complete();
  }

  ActualizarHora() {
    var fecha = new Date();
    this.segundos = fecha.getSeconds();
    this.minutos = fecha.getMinutes();
    this.horas = fecha.getHours();

    if (this.horas >= 8 && this.minutos >= 1 && this.horas < 12) {
      this.pSaludo = "Buenos días";
    }
    if (this.horas >= 12 && this.minutos >= 1 && this.horas < 19) {
      this.pSaludo = "Buenas tardes";
    }
    if (this.horas >= 19 && this.minutos >= 1) {
      this.pSaludo = "Buenas noches";
    }
  }

  guardar() {
    this.startLoading();
    this.asistencia.codigo_usuario = this.user.codigo_usuario;
    this.asistencia.usuario_creacion = this.user.alias;
    this.asistencia.terminal_creacion = "";

    this._comodinService.InsertComodin(this.asistencia).subscribe(
      data => {
        alert(data.Mensaje);
        this._router.navigate(["/menu"]);
      },
      error => console.error(error)
    );
    this.stopLoading();
  }
}
