import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegistroTareoComponent} from './components/registroTareo/registroTareo.component'
import {AsignacionResponsableComponent} from './components/asignacionResponsable/asignacionResponsable.component'
import {AsignacionGrupoComponent} from './components/asignacionGrupo/asignacionGrupo.componente'
import {MenuComponent} from './components/shared/menu/menu.component'


const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'asignacionGrupo', component: AsignacionGrupoComponent},
  { path: 'asignacionResponsable', component: AsignacionResponsableComponent},
  { path: 'registroTareo', component: RegistroTareoComponent},
  { path: '**' , pathMatch: 'full' ,redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
