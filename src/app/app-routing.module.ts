import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistroHorasComponent} from './components/registroHoras/registroHoras.component'

const routes: Routes = [
  { path: 'registroHoras', component: RegistroHorasComponent},
  { path: '**' , pathMatch: 'full' ,redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
