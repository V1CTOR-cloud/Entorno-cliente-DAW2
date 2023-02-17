import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormContents } from '../../views/contact/contact.interface';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  public contents: FormContents = {    
    name: "",
    surname: "",
    email: "",
    comment: ""
  };
  @Input() name: string = "";
  @Input() surname: string = "";
  @Input() email: string = "";
  @Input() comment: string = "";
  @Output() formContents = new EventEmitter<FormContents>();

  public onSubmit(): void {
    if((/[\w]+@{1}[\w]+\.[a-z]{2,3}/).test(this.email)){
      this.contents.email = this.email;
      this.contents.name = this.name;
      this.contents.surname = this.surname;    
      this.contents.comment = this.comment;
      this.formContents.emit(this.contents);
    } else {
      alert('Por favor, introduce datos correctos');
    }
    this.name = this.surname = this.email = this.comment = "";
  }

}
