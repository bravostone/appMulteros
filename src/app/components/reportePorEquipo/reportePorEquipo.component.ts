import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  reporteXEquipoContenido,
  reporteXEquipoFiltro
} from "../../interfaces/reportePorEquipo.interface";
import { ReportePorEquipoService } from "../../services/reportePorEquipo.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-reportePorEquipo",
  templateUrl: "./reportePorEquipo.component.html"
})
export class ReportePorEquipoComponent implements OnInit {
  resultado: reporteXEquipoContenido;
  chart = null;

  filtros: reporteXEquipoFiltro = {
    YearActual: 2018,
    MesActual: 12
  };

  constructor(private _reportePorEquipoService: ReportePorEquipoService) {}

  ngOnInit() {
    this.obtenerInfo();

    this.chart = new Chart({
      chart: {
        type: 'column'
    },
    title: {
        text: 'DashBoard de Puntaje por Equipos'
    },
    subtitle: {
        text: 'Periodo Diciembre 2018'
    },
    // xAxis: {
    //     categories: [
    //         'Jan',
    //         'Feb',
    //         'Mar',
    //         'Apr',
    //         'May',
    //         'Jun',
    //         'Jul',
    //         'Aug',
    //         'Sep',
    //         'Oct',
    //         'Nov',
    //         'Dec'
    //     ],
    //     crosshair: true
    // },
    yAxis: {
        min: 0,
        title: {
            text: 'Puntaje Acumulado'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Equipo A',
        data: [1]

    }, {
        name: 'Equipo B',
        data: [2]

    }, {
        name: 'Equipo C',
        data: [1]

    }]
  } );
}

  obtenerInfo() {
    this._reportePorEquipoService
      .ObtenerListaPuntajeXEquipos(this.filtros)
      .subscribe(data => {
        this.resultado = data;
        console.log(this.resultado);
      });
  }
}
