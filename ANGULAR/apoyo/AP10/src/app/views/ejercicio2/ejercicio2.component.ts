import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css'],
})
export class Ejercicio2Component {
  constructor(public service: DataService) {}

  public name: string = '';
  public case: string = 'one';
  public resp: Response = { data: [{ id: 0, first_name: '', last_name: '' }] };
  public pages: number = 0;
  public points: number = 0;

  public onSubmit(): void {
    this.getPlayers(this.name);
    this.name = '';
    this.case = 'two';
  }

  public onClick(id: number): void {
    this.getGames(id.toString());
    this.case = "three";
  }

  public getPlayers(searchTerm: string): void {
    this.service.getPlayer(searchTerm).subscribe((response) => {
      this.resp = response;
    });
  }

  public getGames(id: string): void {
    this.service.getGames(id).subscribe((response) => {
      this.pages = response.meta.total_pages;
      for(let i = 0; i < this.pages; i++){
        this.service.getGames(id + '&page=' + `${i}`).subscribe((response) => {
          for(let j = 0; j < 25; j++){
            if(response.data[j].pts !== undefined && response.data[j].pts !== null){
              this.points += response.data[j].pts!;
            }
          }
        });
      }
    });
  }
}
