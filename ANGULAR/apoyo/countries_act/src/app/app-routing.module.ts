import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanaComponent } from './views/espana/espana.component';
import { PortugalComponent } from './views/portugal/portugal.component';
import { FranciaComponent } from './views/francia/francia.component';
import { AlemaniaComponent } from './views/alemania/alemania.component';


const routes: Routes = [
  { path: '', redirectTo: 'espana', pathMatch: 'full' },
  { path: 'espana', component: EspanaComponent },
  { path: 'francia', component: FranciaComponent },
  { path: 'portugal', component: PortugalComponent },
  { path: 'alemania', component: AlemaniaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
