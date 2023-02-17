import { Component } from '@angular/core';
import { panel, cards, paragraphs } from '../../views/cambioclimatico/cambioclimatico.interface'


@Component({
  selector: 'app-cambioclimatico',
  templateUrl: './cambioclimatico.component.html',
  styleUrls: ['./cambioclimatico.component.css'],
})
export class CambioclimaticoComponent {
  public panel = panel;
  public cards = cards;
  public counter: number = 0;
  public contador: number = 0;
  public number: number = 0;
  public case: string = "one";
  public paragraphs = paragraphs[this.number];

  public handleClick(number: number): void {
    this.contador = 0;
    this.case = "one";
    this.counter = number;
  }

  public handleMore(number: number): void {
    this.case = "two";
    this.number = number;
    this.paragraphs = paragraphs[this.number];
    this.contador = 1;
  }
}

