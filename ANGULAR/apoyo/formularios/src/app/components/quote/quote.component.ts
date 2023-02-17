import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  @Input() quote: string = "";
  @Output() quotes = new EventEmitter<number>();
  public counter: number = 0;

  public handleQuotes(): void {
    this.counter++;
    this.quotes.emit(this.counter);
    if(this.counter === 4) this.counter = -1;
  }

}
