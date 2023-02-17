import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ejercicio1Component } from './views/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './views/ejercicio2/ejercicio2.component';
import { EnunciadoComponent } from './views/enunciado/enunciado.component';


const routes: Routes = [
  { path: '', redirectTo: 'enunciado', pathMatch: 'full' },
  { path: 'enunciado', component: EnunciadoComponent },
  { path: 'ejercicio1', component: Ejercicio1Component },
  { path: 'ejercicio2', component: Ejercicio2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
