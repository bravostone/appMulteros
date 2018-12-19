import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  horas: number;
  minutos: number;
  segundos: number;
  pSaludo: string;

  constructor() { }

  ngOnInit() {
    this.ActualizarHora();
    setInterval(() => {
      this.ActualizarHora(); 
    }, 1000);
  }

  ActualizarHora(){
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
  
}
