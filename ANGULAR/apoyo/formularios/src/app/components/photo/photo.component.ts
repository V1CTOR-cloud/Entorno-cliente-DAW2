import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  @Input() imgs: string[] = [];
  @Input() class: string = "";
  @Input() caption: string = "";
  @Output() photos = new EventEmitter<number>();

  public onPhoto(i: number): void {
    this.photos.emit(i);
  }

}
