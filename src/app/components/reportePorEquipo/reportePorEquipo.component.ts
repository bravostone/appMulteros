import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  reporteXEquipoContenido,
  reporteXEquipoFiltro,
  ContenidoChart
} from "../../interfaces/reportePorEquipo.interface";
import { ReporteIndividualSelect } from "../../interfaces/reporteIndividual.interface";
import { ReportePorEquipoService } from "../../services/reportePorEquipo.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Chart } from "angular-highcharts";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
  selector: "app-reportePorEquipo",
  templateUrl: "./reportePorEquipo.component.html"
})
export class ReportePorEquipoComponent implements OnInit {
  resultado: reporteXEquipoContenido[];
  charter: ContenidoChart;

  chart = null;

  filtros: reporteXEquipoFiltro = {
    YearActual: new Date().getFullYear(),
    MesActual: new Date().getMonth() + 1
  };

  PuntajeA: number[];
  PuntajeB: number[];
  PuntajeC: number[];
  EquipoA: string;
  EquipoB: string;
  EquipoC: string;

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
  public ListaNombreMes: string[] = [];

  public Arraycin = [
    {
      name: "Equipo A",
      data: [9]
    },
    {
      name: "Equipo B",
      data: [11]
    },
    {
      name: "Equipo C",
      data: [11]
    }
  ];

  constructor(
    private _reportePorEquipoService: ReportePorEquipoService,
    private loadingBar: LoadingBarService
  ) {}

  ngOnInit() {
    this.obtenerInfo();
  }

  startLoading() {
    this.loadingBar.start();
  }
  stopLoading() {
    this.loadingBar.complete();
  }

  obtenerInfo() {
    if (Number(this.filtros.YearActual) == 0) {
      alert("Debe seleccionar el año para el filtro");
      return;
    }

    if (Number(this.filtros.MesActual) == 0) {
      alert("Debe seleccionar el mes para el filtro");
      return;
    }

    this._reportePorEquipoService
      .ObtenerListaPuntajeXEquipos(this.filtros)
      .subscribe(data => {
        this.resultado = data;
      });
      
    this.obtenerMeses();
    this.Pruebita();

    if (String(this.resultado) !== "undefined") {
      if (this.resultado.length > 0) {
        this.generarChart();
      }
    }    
  }

  generarChart() {
    this.startLoading();
    setTimeout(() => {
      this.chart = new Chart({
        chart: {
          type: "column"
        },
        title: {
          text: "DashBoard de Puntaje por Equipos"
        },
        subtitle: {
          text:
            "Periodo " +
            this.ListaNombreMes[0] +
            " - " +
            this.filtros.YearActual
        },
        xAxis: {
          categories: this.ListaNombreMes,
          crosshair: true
        },
        yAxis: {
          min: 0,
          allowDecimals: false,
          title: {
            text: "Puntaje Acumulado"
          }
        },
        tooltip: {
          formatter: function() {
            let cadena: string =
              '<b>' +
              this.series.name +
              '</b><br/>';

            //  console.log(this.EquipoA);
            //  console.log(this.series);
            //  console.log(this.series.description);
             cadena = cadena + this.series.userOptions.description
            // switch (this.series.name) {
            //   case "Equipo A":
            //     cadena = cadena + this.series.userOptions.description; //String(this.EquipoA) + "Oscar<br/>Alexi<br/>Carlos";
            //     break;
            //   case "Equipo B":
            //     cadena = cadena + this.EquipoB;//'<br/>Kati<br/>Johan<br/>Diana<br/>Andrea';
            //     break;
            //   case "Equipo C":
            //     cadena = cadena + this.EquipoC;//'<br/>Leo<br/>Cynthia<br/>Piero<br/>Cesareo';
            //     break;
            // }
            cadena = cadena + '<br/><b>Puntos: ' + this.point.y + '</b>'
            return cadena;
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        exporting: {
          enabled: true
        },
        series: [
          {
            name: "Equipo A",
            data: this.PuntajeA,
            description: this.EquipoA
          },
          {
            name: "Equipo B",
            data: this.PuntajeB,
            description:this.EquipoB
          },
          {
            name: "Equipo C",
            data: this.PuntajeC,
            description:this.EquipoC
          }
        ]
      });
      this.stopLoading();
    }, 2000);
  }

  obtenerMeses() {
    this.ListaNombreMes = [];
    for (let index = 0; index < this.ListaMeses.length; index++) {
      if (this.filtros.MesActual > 0) {
        if (this.filtros.MesActual == this.ListaMeses[index].codigo) {
          this.ListaNombreMes.push(this.ListaMeses[index].nombre);
        }
      } else {
        this.ListaNombreMes.push(this.ListaMeses[index].nombre);
      }
    }
  }

  Pruebita() {
    this.PuntajeA = [];
    this.PuntajeB = [];
    this.PuntajeC = [];
    this.EquipoA = "";
    this.EquipoB = "";
    this.EquipoC = "";

    if (String(this.resultado) !== "undefined") {
      for (let index = 0; index < this.resultado.length; index++) {
        switch (this.resultado[index].NombreEquipo) {
          case "Equipo A":
            this.PuntajeA.push(this.resultado[index].Puntos);
            this.EquipoA = this.resultado[index].IntegrantesEquipo.replace(",","<br/>").replace(",","<br/>").replace(",","<br/>");
            break;
          case "Equipo B":
            this.PuntajeB.push(this.resultado[index].Puntos);
            this.EquipoB = this.resultado[index].IntegrantesEquipo.replace(",","<br/>").replace(",","<br/>").replace(",","<br/>").replace(",","<br/>");
            break;
          case "Equipo C":
            this.PuntajeC.push(this.resultado[index].Puntos);
            this.EquipoC = this.resultado[index].IntegrantesEquipo.replace(",","<br/>").replace(",","<br/>").replace(",","<br/>").replace(",","<br/>");
            break;
        }
      }
    }
  }
}