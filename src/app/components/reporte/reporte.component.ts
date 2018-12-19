import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service';
import { SemanaService } from '../../services/shared/semana.service';
import { ReporteResponse } from "../../interfaces/reporte.interface";
import { ReporteRequest } from "../../interfaces/reporte.interface";
import { Semana } from "../../interfaces/shared/semana.interface";

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  listaTareos: ReporteResponse[];
  request: ReporteRequest;
  listaSemana: Semana[];
  listaAnios: number[] = [2018,2019];
  anio: number = 0;
  semana: number = 0;
  constructor(private _reporte : ReporteService, private _semana : SemanaService) { }

  ngOnInit() {
    this.getSemana();
    this.getDatos();
  }

  getDatos(){
    this.request = {
      YearActual: this.anio, 
      SemanaActual: this.semana
    };

    this._reporte.getTareos(this.request).subscribe(
      (data: any) =>{
          this.listaTareos = data
      }
    );

  }

  getSemana(){
    this._semana.getSemana().subscribe(
      (data: any) =>{
          this.listaSemana = data.Semanas
      }
    );

  }

}
