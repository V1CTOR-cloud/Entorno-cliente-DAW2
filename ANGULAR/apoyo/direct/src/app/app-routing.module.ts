import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { SanidadComponent } from './views/sanidad/sanidad.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'proyectos/sanidad', component: SanidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
