import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import "rxjs/Rx";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { NgDragDropModule } from "ng-drag-drop";

//Servicios
import { LoginService } from "./services/login.service";
import { TareoService } from "./services/registroTareo.service";
import { UsuarioService } from "./services/shared/usuario.service";
import { AsignacionResponsableService } from "./services/asignacion-responsable.service";
import { StorageService } from "./services/storage.service";
import { ReporteService } from "./services/reporte.service";
import { SemanaService } from "./services/shared/semana.service";
import { ReporteIndividualService } from "./services/reporteIndividual.service";
import { ReportePorEquipoService } from "./services/reportePorEquipo.service";

//Rutas
import { appRoutingProvider, routing } from "./app-routing.module";

//Componentes
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroTareoComponent } from "./components/registroTareo/registroTareo.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { MenuComponent } from "./components/shared/menu/menu.component";
import { AsignacionGrupoComponent } from "./components/asignacionGrupo/asignacionGrupo.componente";
import { AsignacionResponsableComponent } from "./components/asignacionResponsable/asignacionResponsable.component";
import { ReporteComponent } from "./components/reporte/reporte.component";

import { ReporteIndivdualComponent } from "./components/reporte-indivdual/reporte-indivdual.component";
import { ReportePorEquipoComponent } from "./components/reportePorEquipo/reportePorEquipo.component";
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroTareoComponent,
    NavbarComponent,
    MenuComponent,
    AsignacionGrupoComponent,
    AsignacionResponsableComponent,
    ReporteComponent,
    ReporteIndivdualComponent,
    ReportePorEquipoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFontAwesomeModule,
    NgDragDropModule.forRoot(),
    ChartModule
  ],
  providers: [
    TareoService,
    LoginService,
    UsuarioService,
    appRoutingProvider,
    AsignacionResponsableService,
    StorageService,
    ReporteService,
<<<<<<< HEAD
    ReporteIndividualService,
    ReportePorEquipoService
=======
    SemanaService,
    ReporteIndividualService
>>>>>>> be3d41162a0b6fa21abf3c282835cda1e0fedb5f
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
