import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Country } from 'src/app/models/country';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-alemania',
  templateUrl: './alemania.component.html',
  styleUrls: ['./alemania.component.css']
})
export class AlemaniaComponent {
  constructor(public service: DataService,) { }

  public germany: Country | undefined;
  public weather: Weather | undefined;


  public getGermany(){
    this.service.getCountry("germany").subscribe(response => {
      this.germany = response[0];
    })

    this.service.getWeather("germany").subscribe(response => {
      this.weather = response;
    })
  }


  ngOnInit(): void {
    this.getGermany();
  }
}
