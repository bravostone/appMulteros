import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {RegistroTareoComponent} from './components/registroTareo/registroTareo.component'
import {AsignacionResponsableComponent} from './components/asignacionResponsable/asignacionResponsable.component'
import {AsignacionGrupoComponent} from './components/asignacionGrupo/asignacionGrupo.componente'
import {MenuComponent} from './components/shared/menu/menu.component'
import {LoginComponent} from './components/login/login.component'

const appRoutes:Routes=[
  { path: 'menu', component: MenuComponent},
  { path: 'asignacionGrupo', component: AsignacionGrupoComponent},
  { path: 'asignacionResponsable', component: AsignacionResponsableComponent},
  { path: 'registroTareo', component: RegistroTareoComponent},
  { path: 'login-component' , component: LoginComponent},
  { path: '' , pathMatch: 'full' ,redirectTo: 'login-component'}
];

export const appRoutingProvider:any[]=[];
export const routing:ModuleWithProviders =RouterModule.forRoot(appRoutes);
