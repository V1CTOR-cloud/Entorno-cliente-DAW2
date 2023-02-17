import { Component } from '@angular/core';
import { contents, contentsImageTwo } from './energia.interface';

@Component({
  selector: 'app-energia',
  templateUrl: './energia.component.html',
  styleUrls: ['./energia.component.css']
})
export class EnergiaComponent {
  public number: number = 0;
  public contents = contents;
  public contentsImageTwo = contentsImageTwo;
  public case: string = "one";
  public caseTwo: string = "one";
  public counter: number = 0;

  public onPhoto(img: number): void {
    if (img === 0 && this.number === 0){
        this.number = 1;
      } else if (img === 0 && this.number === 1){
        this.number = 2;
        this.case = "two", this.caseTwo = "one";
      } else if (img === 1 && this.number === 1){
        this.number = 3;
        this.case = "two", this.caseTwo = "two";
      } else if(this.number === 2 || this.number === 3){
        this.number = 1;
        this.case = "one";
      }
  }

  public handleQuotes(numberQuote: number): void {
    if(numberQuote === 4) numberQuote = 0, this.number = 0, this.case = "one";
    this.counter = numberQuote;
  }

  public onBack(): void {
    this.case = "one";
    this.number = 0; 
  }
}
