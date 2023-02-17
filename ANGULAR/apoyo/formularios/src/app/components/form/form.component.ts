import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormContents } from './form.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public contents: FormContents = {    
    event: "",
    start: "",
    end: ""
  };
  public datepicked: string = "";
  @Input() event: string = "";
  @Input() start: string = "";
  @Input() end: string = "";
  @Output() formContents = new EventEmitter<FormContents>();
  public hours: string[] = ["00:00:00","01:00:00","02:00:00","03:00:00","04:00:00","05:00:00","06:00:00","07:00:00","08:00:00","09:00:00","10:00:00","11:00:00","12:00:00","13:00:00","14:00:00","15:00:00","16:00:00","17:00:00","18:00:00","19:00:00","20:00:00","21:00:00","22:00:00","23:00:00"];

  public onSubmit(): void {
    this.contents.start = this.start;
    this.contents.end = this.end;
    this.contents.event = this.event;

    this.formContents.emit(this.contents);
  }

 
}
