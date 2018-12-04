import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import "rxjs/Rx";

//Servicios
import { LoginService } from "./services/login.service";
import { TareoService } from "./services/registroTareo.service";
import { UsuarioService } from "./services/shared/usuario.service";
import { AsignacionResponsableService } from "./services/asignacion-responsable.service";

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroTareoComponent,
    NavbarComponent,
    MenuComponent,
    AsignacionGrupoComponent,
    AsignacionResponsableComponent
  ],
<<<<<<< HEAD
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [TareoService, LoginService, UsuarioService, AsignacionResponsableService],
=======
  imports: [BrowserModule, FormsModule, HttpModule,routing],
  providers: [TareoService, LoginService, UsuarioService,appRoutingProvider],
>>>>>>> a697ff4dbe138c8c2fa19253d647bc309c5be041
  bootstrap: [AppComponent, RegistroTareoComponent]
})
export class AppModule {}
