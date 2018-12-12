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
  chart = null;
  public ListaPuntos: number[] = [];
  public ListaNombres: string[] = [];
  listaDatos : ReporteIndividualResponse[];
  request : ReporteIndividualRequest;
  constructor(private _reporte : ReporteIndividualService) { }

  ngOnInit() {
    this.getDatos();
    setTimeout(() => {
      this.setArmarArrays();
    }, 2000);
    
    setTimeout(() => {
      this.chart = new Chart({
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
          categories: this.ListaNombres
        },
        series: [
          {
            name: 'Puntos',
            data: this.ListaPuntos
          }
        ]
      });
    }, 2000);    
  }

  getDatos(){
    this.request = {
      YearActual: 2018, 
      SemanaActual: 0,
      MesActual: 12
    };

    this._reporte.getReporteIndividual(this.request).subscribe(
      (data: any) =>{
          //console.log(data);
          this.listaDatos = data
          //console.log(this.listaDatos);
      }
    );    
  }
  setArmarArrays(){
    console.log("pintar lista datos asignados");
    console.log(this.listaDatos);
    let i:Number = 0;
    for(let item of this.listaDatos){
      this.ListaNombres.push(item.NombreCompleto);
      this.ListaPuntos.push(parseInt(item.puntos_mes));
    }
  }
  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
