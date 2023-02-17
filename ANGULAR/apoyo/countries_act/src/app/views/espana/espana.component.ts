import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Country } from 'src/app/models/country';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-espana',
  templateUrl: './espana.component.html',
  styleUrls: ['./espana.component.css']
})
export class EspanaComponent {
  constructor(public service: DataService,) { }

  public spain: Country | undefined;
  public weather: Weather | undefined;


  public getSpain(){
    this.service.getCountry("spain").subscribe(response => {
      this.spain = response[0];
    })

    this.service.getWeather("spain").subscribe(response => {
      this.weather = response;
    })
  }


  ngOnInit(): void {
    this.getSpain();
  }
}
