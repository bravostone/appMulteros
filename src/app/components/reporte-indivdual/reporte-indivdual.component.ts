import { Component, OnInit } from "@angular/core";
import { ReporteIndividualRequest } from "../../interfaces/reporteIndividual.interface";
import { ReporteIndividualResponse } from "../../interfaces/reporteIndividual.interface";
import { ReporteIndividualSelect } from "../../interfaces/reporteIndividual.interface";
import { ReporteIndividualService } from "../../services/reporteIndividual.service";
import { ReporteIndividualPuntos } from "../../interfaces/reporteIndividual.interface";
import { LoadingBarService } from "@ngx-loading-bar/core";

import { Chart } from "angular-highcharts";

@Component({
  selector: "app-reporte-indivdual",
  templateUrl: "./reporte-indivdual.component.html",
  styleUrls: ["./reporte-indivdual.component.css"]
})
export class ReporteIndivdualComponent implements OnInit {
  chart = null;
  public ListaPuntos: ReporteIndividualPuntos[] = [];
  public ListaNombres: string[] = [];
  listaDatos: ReporteIndividualResponse[];
  mes: number = new Date().getMonth() + 1;
  anio: number = new Date().getFullYear();
  request: ReporteIndividualRequest;
  public ListaAnios: number[] = [2018, 2019];
  public ListaMeses: ReporteIndividualSelect[] = [
    { codigo: 1, nombre: "Enero" },
    { codigo: 2, nombre: "Febrero" },
    { codigo: 3, nombre: "Marzo" },
    { codigo: 4, nombre: "Abril" },
    { codigo: 5, nombre: "Mayo" },
    { codigo: 6, nombre: "Junio" },
    { codigo: 7, nombre: "Julio" },
    { codigo: 8, nombre: "Agosto" },
    { codigo: 9, nombre: "Septiembre" },
    { codigo: 10, nombre: "Octubre" },
    { codigo: 11, nombre: "Noviembre" },
    { codigo: 12, nombre: "Diciembre" }
  ];
  constructor(
    private _reporte: ReporteIndividualService,
    private loadingBar: LoadingBarService
  ) {}

  ngOnInit() {
    //this.getDatos();
    // setTimeout(() => {
    //   this.setArmarArrays();
    // }, 2000);
    // setTimeout(() => {
    //   this.chart = new Chart({
    //     chart: {
    //       type: 'bar'
    //     },
    //     title: {
    //       text: 'Puntos Individuales del Mes'
    //     },
    //     credits: {
    //       enabled: false
    //     },
    //     xAxis: {
    //       categories: this.ListaNombres
    //     },
    //     yAxis: {
    //       //tickInterval: 1,
    //       allowDecimals: false,
    //       title: {
    //         text: '', //values
    //         align: 'high'
    //     }
    //      },
    //     series: [
    //       {
    //         name: 'total Puntos',
    //         colorIndex: 6,
    //         pointWidth:20,
    //         data: this.ListaPuntos
    //       }
    //     ]
    //   });
    // }, 2000);
  }
  startLoading() {
    this.loadingBar.start();
  }
  stopLoading() {
    this.loadingBar.complete();
  }
  getDatos() {
    // this.request = {
    //   YearActual: 2018,
    //   SemanaActual: 0,
    //   MesActual: 12
    // };

    this._reporte.getReporteIndividual(this.request).subscribe((data: any) => {
      //console.log(data);
      this.listaDatos = data;
      //console.log(this.listaDatos);
    });
  }
  getReporte(anio: number, mes: number) {
    this.startLoading();
    this.request = {
      YearActual: anio,
      SemanaActual: 0,
      MesActual: mes
    };
    console.log(this.request);

    this.getDatos();
    setTimeout(() => {
      this.setArmarArrays();
    }, 2000);

    setTimeout(() => {
      this.chart = new Chart({
        chart: {
          type: "bar"
        },
        title: {
          text: "Puntos Individuales del Mes"
        },
        credits: {
          enabled: false
        },
        xAxis: {
           categories: this.ListaNombres          
        },
        plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
        yAxis: {
          //tickInterval: 1,
          allowDecimals: false,
          title: {
            text: "", //values
            align: "high"
          }
        },
        series: this.ListaPuntos
          // {
          //   name: "total Puntos",
          //   colorIndex: 6,
          //   pointWidth: 20,
          //   data: this.ListaPuntos
          // }
        //   {
        //     name: 'John',
        //     data: [5, 3, 4, 7, 2]
        // }, {
        //     name: 'Jane',
        //     data: [2, 2, 3, 2, 1]
        // }, {
        //     name: 'Joe',
        //     data: [3, 4, 4, 2, 5]
        // }
       // ]
      });
      this.stopLoading();
    }, 2000);
  }
  setArmarArrays() {
    console.log("pintar lista datos asignados");
    console.log(this.listaDatos);
    let i: Number = 0;
    let serieComodin: ReporteIndividualPuntos = { name:"", color:"yellow", data:[]};
    let serieComodinMulta: ReporteIndividualPuntos = { name:"", color:"black", data:[]};
    let serieMulta: ReporteIndividualPuntos = { name:"", color:"red", data:[]};

    this.ListaNombres = [];
    this.ListaPuntos = [];
    for (let item of this.listaDatos) {
      this.ListaNombres.push(item.NombreCompleto);
      //serie.name
      //this.ListaPuntos.push(parseInt(item.Puntos_mes));
      serieComodin.name = "Comodin";
      serieComodin.data.push(parseInt(item.Puntos_comodin)); 

      serieComodinMulta.name = "Comodin+Multa";
      serieComodinMulta.data.push(parseInt(item.Puntos_comodin_multa)); 
      
      serieMulta.name = "Multa";
      serieMulta.data.push(parseInt(item.Puntos_multa)); 

    }
    if(serieComodin!=null){
      console.log(serieComodin);
      this.ListaPuntos.push(serieComodin);
    }
    if(serieComodinMulta!=null){
      console.log(serieComodinMulta);
      this.ListaPuntos.push(serieComodinMulta);
    }
    if(serieMulta!=null){
      this.ListaPuntos.push(serieMulta);
    }
  }
  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
