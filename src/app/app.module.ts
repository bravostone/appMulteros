import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import "rxjs/Rx";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { NgDragDropModule } from "ng-drag-drop";
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ChartModule } from 'angular-highcharts';

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
<<<<<<< HEAD
import { GeneralComponent } from './components/shared/general/general.component';
=======
import { ChartModule } from 'angular-highcharts';
import { RelojComponent } from './components/reloj/reloj.component';
>>>>>>> edb85bd1f2b0c1b6d0a06fa4d2d01f8c6d452ed7

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
    ReportePorEquipoComponent,
<<<<<<< HEAD
    GeneralComponent
=======
    RelojComponent
>>>>>>> edb85bd1f2b0c1b6d0a06fa4d2d01f8c6d452ed7
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFontAwesomeModule,
    NgDragDropModule.forRoot(),
    ChartModule,
    LoadingBarModule.forRoot()
  ],
  providers: [
    TareoService,
    LoginService,
    UsuarioService,
    appRoutingProvider,
    AsignacionResponsableService,
    StorageService,
    ReporteService,
    ReporteIndividualService,
    ReportePorEquipoService,
    SemanaService,
    ReporteIndividualService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
