import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Response } from 'src/app/models/profile';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public apiUrlDavid = 'https://api.github.com/search/users?q=david';
  public apiUrlDeveloper = 'https://api.github.com/search/users?q=developer';

  public getProfilesDavid(): Observable<Response>{
    return this.http.get<Response>(this.apiUrlDavid);
  }

  public getProfilesDeveloper(): Observable<Response>{
    return this.http.get<Response>(this.apiUrlDeveloper);
  }

}
