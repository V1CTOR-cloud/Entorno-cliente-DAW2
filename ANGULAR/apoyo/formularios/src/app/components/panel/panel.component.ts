import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input() tiles: { color: string, cols: number, rows: number, text: string }[] = [{ color: "", cols: 0, rows: 0, text: ""}];
  @Input() cards: { title: string, subtitle: string, image: string, littleImage: string, text: string, caption: string } = { title: "", subtitle: "", image: "", littleImage: "", text: "", caption: "" };
  @Input() caption: string = "";
  @Output() counter = new EventEmitter<number>();
  @Output() more = new EventEmitter<number>();
  public number: number = 0;


  public handleClick(numberContent: number): void {
    this.number = numberContent;
    this.counter.emit(numberContent);
  }

  public handleMore(): void {
    this.more.emit(this.number);
  }
}
