import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/profile.model';

@Injectable({
    providedIn: 'root'
})
export class Service {

    constructor(public http: HttpClient) { }
    public url = 'https://api.github.com/search/users?q=';

    public getProfiles(keyword:string): Observable<Response> {
        return this.http.get<Response>(this.url + keyword);
    }

}
