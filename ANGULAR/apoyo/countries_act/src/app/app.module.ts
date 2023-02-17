import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { EspanaComponent } from './views/espana/espana.component';
import { AlemaniaComponent } from './views/alemania/alemania.component';
import { FranciaComponent } from './views/francia/francia.component';
import { PortugalComponent } from './views/portugal/portugal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EspanaComponent,
    AlemaniaComponent,
    FranciaComponent,
    PortugalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
