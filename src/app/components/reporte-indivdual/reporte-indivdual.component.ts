import { Component, OnInit } from '@angular/core';
import { ReporteIndividualRequest } from "../../interfaces/reporteIndividual.interface";
import { ReporteIndividualResponse } from "../../interfaces/reporteIndividual.interface";
import { ReporteIndividualService } from '../../services/reporteIndividual.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-reporte-indivdual',
  templateUrl: './reporte-indivdual.component.html',
  styleUrls: ['./reporte-indivdual.component.css']  
})
export class ReporteIndivdualComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Puntos Individuales del Mes'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['CEsareo', 'Diana', 'Alexi', 'Piero', 'Leo', 'Adriana', 'Cynthia']
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });
  listaDatos : ReporteIndividualResponse;
  request : ReporteIndividualRequest;
  constructor(private _reporte : ReporteIndividualService) { }

  ngOnInit() {
    //this.getDatos();
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
  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
