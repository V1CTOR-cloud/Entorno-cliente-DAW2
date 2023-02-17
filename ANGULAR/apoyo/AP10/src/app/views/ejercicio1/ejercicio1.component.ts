import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { Result } from 'src/app/models/response';
import { Episode } from 'src/app/models/response';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css'],
})
export class Ejercicio1Component {
  constructor(public service: DataService) {}

  public type: string = '';
  public search: string = '';
  public case: string = 'one';
  public resp: Result[] = [];
  public episodes: Episode[] = [];

  public onType(): void {
    this.type = this.search;
    this.case = 'two';
  }

  public onSubmit(type: string): void {
    if (type === 'capitulo') {
      this.case = 'three';
      this.getEpisode(this.type);
    } else if (type === 'personaje') {
      this.case = 'four';
      this.getCharacter(`${'?name='}` + this.type);
    }
  }

  public getCharacter(search: string): void {
    this.service.getCharacter(search).subscribe((response) => {
      if (search[0] === '?') {
        this.resp = response.results;
      } else {
        this.resp.push(response);
      }
    });
  }

  public getEpisode(search: string): void {
    this.service.getEpisode(search).subscribe((response) => {
      this.episodes.push(response);
      let characters = this.episodes[0].characters;
      for (let i = 0; i < characters.length; i++) {
        this.getCharacter(characters[i].substring(42, characters[i].length));
      }
    });
  }
}
