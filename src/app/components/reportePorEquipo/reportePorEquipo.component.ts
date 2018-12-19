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

@Component({
  selector: "app-reportePorEquipo",
  templateUrl: "./reportePorEquipo.component.html"
})
export class ReportePorEquipoComponent implements OnInit {
  public resultado: reporteXEquipoContenido[] = [];
  chart = null;
  filtros: reporteXEquipoFiltro = {
    YearActual: new Date().getFullYear(),
    MesActual: new Date().getMonth() + 1
  };

  public ListaPuntos: number[] = [];
  public ListaNombres: string[] = [];
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
  public ListaArray: any[][] = [][0];

  public Arraycin = [
    {
      name: "Equipo A",
      data: [0, 1, 1, 1, 1]
    },
    {
      name: "Equipo B",
      data: [0, 1, 1, 2, 1]
    },
    {
      name: "Equipo C",
      data: [0, 0, 1, 3, 1]
    }
  ];

  constructor(private _reportePorEquipoService: ReportePorEquipoService) {}

  ngOnInit() {
    this.obtenerInfo();
    this.obtenerMeses();
    //this.ConvertirArray();
    this.chart = new Chart({
      chart: {
        type: "column"
      },
      title: {
        text: "DashBoard de Puntaje por Equipos"
      },
      subtitle: {
        text: "Periodo Diciembre " + this.filtros.YearActual
      },
      xAxis: {
        categories: this.ListaNombreMes,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: "Puntaje Acumulado"
        }
      },
      //   tooltip: {
      //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      //     pointFormat:
      //       '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      //       '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      //     footerFormat: "</table>",
      //     shared: true,
      //     useHTML: true
      //   },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: this.Arraycin
      // series: [
      //   // {
      //   //   name: 'holi',
      //   //   data: [ 2, 4, 1]
      //   // }
      //   {
      //     name: "Equipo A",
      //     data: [1, 3, 4, 5, 3, 6, 6, 6]
      //   },
      //   {
      //     name: "Equipo B",
      //     data: [2]
      //   },
      //   {
      //     name: "Equipo C",
      //     data: [1]
      //   }
      // ]
    });
  }

  obtenerInfo() {
    //debugger;
    console.log(this.resultado);
    this._reportePorEquipoService
      .ObtenerListaPuntajeXEquipos(this.filtros)
      .subscribe(data => {
        this.resultado = data;
        console.log(this.resultado);
        console.log(data.length);

        // for (let index = 0; index < data.length; index++) {
        //   this.ListaArray.push(data[index].NombreEquipo,data[index].Puntos);
        //   //this.ListaArray.push(data[index].Puntos);
        // }
        // console.log(this.ListaArray);
      });

    // for (let index = 0; index < this.resultado.length; index++) {
    //   this.ListaArray.push(this.resultado[index].NombreEquipo);
    //   this.ListaArray.push(this.resultado[index].Puntos);

    // }
  }

  // ConvertirArray(){
  //   console.log(this.resultado);
  //   for (let index = 0; index < this.resultado.length; index++) {
  //     this.ListaArray.push(this.resultado[index].NombreEquipo);
  //     this.ListaArray.push(this.resultado[index].Puntos);

  //   }
  // }

  obtenerMeses() {
    for (let index = 0; index < this.ListaMeses.length; index++) {
      if (this.filtros.MesActual > 0) {
        this.ListaNombreMes.push(this.ListaMeses[index].nombre);
      } else {
        this.ListaNombreMes.push(this.ListaMeses[index].nombre);
      }
    }
  }
}
