import { Component } from '@angular/core';

@Component({
  selector: 'app-sanidad',
  templateUrl: './sanidad.component.html',
  styleUrls: ['./sanidad.component.css']
})
export class SanidadComponent {
  public images: string[] = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2182pmQsvISsRjsMsYq3fFmSOfmNQHPIOIciA8Ucjf2uGNDtIlWUad45tf0Kv8M9cD8&usqp=CAU", "https://healthissuesindia.com/wp-content/uploads/2018/06/Indian-boy-with-polio.jpg", "https://polioeradication.org/wp-content/uploads/2016/07/unspecified-4.jpg"];
  public intervalos: any; 
  public paragraphs: boolean = true;
  public photos: string = "one";
  public sentence: string = "Niños con poliomielitis."

  public onClick(): void {
    clearInterval(this.intervalos);
    this.paragraphs = !this.paragraphs;
    this.photos = "two";
    this.sentence = "Organización Mundial de la Salud."
  }

  ngOnInit(){
    this.intervalos = setInterval(() => {
      this.images = this.images.sort(() => Math.random() - 0.5);
    }, 250);
  }

}
