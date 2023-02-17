import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public apiUrlCountry = 'https://restcountries.com/v3.1/name/';
  public apiUrlWeather = 'http://api.openweathermap.org/data/2.5/weather?q=';

  getCountry(country: string):Observable<any>{
    return this.http.get<any>(this.apiUrlCountry+country);
  }

  getWeather(country: string):Observable<any>{
    return this.http.get<any>(this.apiUrlWeather + country + ',esp&units=metric&lang=es&APPID=f2b990c09e6f73102863cfe63a569f43');
  }

}
