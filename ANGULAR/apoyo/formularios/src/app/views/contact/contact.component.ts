import { Component } from '@angular/core';
import { FormContents } from '../../views/contact/contact.interface';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public name: string = "";
  public surname: string = "";
  public email: string = "";
  public comment: string = "";
  public case: string = "one";


  public onSubmit(formContents: FormContents): void {
    this.case = "two";
    this.name = formContents.name;
    this.surname = formContents.surname;
    this.email = formContents.email;
    this.comment = formContents.comment;
  }

}
