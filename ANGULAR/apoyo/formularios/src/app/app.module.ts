import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_FORMATS} from '@angular/material/core'


import { FullCalendarModule } from '@fullcalendar/angular';
import { StoreModule } from '@ngrx/store';
import { CalendarFeature } from './views/events/reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { HomeComponent } from './views/home/home.component';
import { SanidadComponent } from './views/sanidad/sanidad.component';
import { CambioclimaticoComponent } from './views/cambioclimatico/cambioclimatico.component';
import { EnergiaComponent } from './views/energia/energia.component';
import { SaneamientoComponent } from './views/saneamiento/saneamiento.component';
import { PhotoComponent } from './components/photo/photo.component';
import { TextComponent } from './components/text/text.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ContentComponent } from './components/content/content.component';
import { FormComponent } from './components/form/form.component';
import { ContactComponent } from './views/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent } from './components/panel/panel.component';
import { EventsComponent } from './views/events/events.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ProyectosComponent,
    HomeComponent,
    SanidadComponent,
    CambioclimaticoComponent,
    EnergiaComponent,
    SaneamientoComponent,
    PhotoComponent,
    TextComponent,
    QuoteComponent,
    ContentComponent,
    FormComponent,
    ContactComponent,
    PanelComponent,
    EventsComponent,
    FormContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    StoreModule.forRoot(),
    StoreModule.forFeature(CalendarFeature),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
