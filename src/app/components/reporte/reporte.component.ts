import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service';
import { ReporteResponse } from "../../interfaces/reporte.interface";
import { ReporteRequest } from "../../interfaces/reporte.interface";

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  listaTareos: ReporteResponse;
  request: ReporteRequest;

  constructor(private _reporte : ReporteService) { }

  ngOnInit() {
    debugger;
    this.getDatos();
  }

  getDatos(){
    this.request = {
      YearActual: 2018, 
      SemanaActual: 49
    };

    this._reporte.getTareos(this.request).subscribe(
      (data: any) =>{
          this.listaTareos = data
      }
    );

  }

}
