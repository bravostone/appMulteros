import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistroTareoComponent } from "./components/registroTareo/registroTareo.component";

const routes: Routes = [
  { path: "registroTareo", component: RegistroTareoComponent },
  { path: "**", pathMatch: "full", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
