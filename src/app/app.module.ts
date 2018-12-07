import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import "rxjs/Rx";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//Servicios
import { LoginService } from "./services/login.service";
import { TareoService } from "./services/registroTareo.service";
import { UsuarioService } from "./services/shared/usuario.service";
import { AsignacionResponsableService } from "./services/asignacion-responsable.service";
import { StorageService } from "./services/storage.service";

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
import { ReporteIndividualComponent } from './reporte-individual/reporte-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroTareoComponent,
    NavbarComponent,
    MenuComponent,
    AsignacionGrupoComponent,
    AsignacionResponsableComponent,
    ReporteIndividualComponent
  ],
  imports: [
      BrowserModule, 
      FormsModule, 
      HttpModule, 
      routing, 
      AngularFontAwesomeModule
    ],
  providers: [
    TareoService,
    LoginService,
    UsuarioService,
    appRoutingProvider,
    AsignacionResponsableService,
    StorageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
