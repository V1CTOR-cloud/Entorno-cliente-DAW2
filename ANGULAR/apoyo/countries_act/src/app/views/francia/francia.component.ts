import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Country } from 'src/app/models/country';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-francia',
  templateUrl: './francia.component.html',
  styleUrls: ['./francia.component.css']
})
export class FranciaComponent {
  constructor(public service: DataService,) { }

  public france: Country | undefined;
  public weather: Weather | undefined;


  public getFrance(){
    this.service.getCountry("france").subscribe(response => {
      this.france = response[0];
    })

    this.service.getWeather("france").subscribe(response => {
      this.weather = response;
    })
  }


  ngOnInit(): void {
    this.getFrance();
  }

}
