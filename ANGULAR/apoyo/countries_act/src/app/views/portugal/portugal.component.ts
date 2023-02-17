import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Country } from 'src/app/models/country';
import { Weather } from 'src/app/models/weather';
import { WeatherDos } from 'src/app/models/weather';

@Component({
  selector: 'app-portugal',
  templateUrl: './portugal.component.html',
  styleUrls: ['./portugal.component.css']
})
export class PortugalComponent {
  constructor(public service: DataService,) { }

  public portugal: Country | undefined;
  public weather: Weather | undefined;
  public weatherDos: WeatherDos | undefined;


  public getPortugal(){
    this.service.getCountry("portugal").subscribe(response => {
      this.portugal = response[0];
    })

    this.service.getWeather("portugal").subscribe(response => {
      this.weather = response;
      this.weatherDos = response.weather[0];
    })
  }


  ngOnInit(): void {
    this.getPortugal();
  }

}
