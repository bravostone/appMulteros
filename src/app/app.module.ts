import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

//Rutas
import { AppRoutingModule } from "./app-routing.module";

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
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
