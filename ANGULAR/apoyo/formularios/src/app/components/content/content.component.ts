import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input() firstLetter: string = "";
  @Input() text: string = "";
  @Input() quote: string = "";
  @Output() counter = new EventEmitter<number>();


  public handleQuotes(numberContent: number): void {
    this.counter.emit(numberContent);
  }
}
