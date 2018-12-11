import { Component, OnInit } from '@angular/core';
import { ReporteIndividualRequest } from "../../interfaces/reporteIndividual.interface";
import { ReporteIndividualResponse } from "../../interfaces/reporteIndividual.interface";
import { ReporteIndividualService } from '../../services/reporteIndividual.service';

@Component({
  selector: 'app-reporte-indivdual',
  templateUrl: './reporte-indivdual.component.html',
  styleUrls: ['./reporte-indivdual.component.css']
})
export class ReporteIndivdualComponent implements OnInit {
  listaDatos : ReporteIndividualResponse;
  request : ReporteIndividualRequest;
  constructor(private _reporte : ReporteIndividualService) { }

  ngOnInit() {
    this.getDatos();
  }

  getDatos(){
    this.request = {
      YearActual: 2018, 
      SemanaActual: 0,
      MesActual: 12
    };

    this._reporte.getReporteIndividual(this.request).subscribe(
      (data: any) =>{
          this.listaDatos = data
      }
    );

  }

}
