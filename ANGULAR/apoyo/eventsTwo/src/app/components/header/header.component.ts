import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public title: string = 'Pelis';


  public onImageEnter(event: MouseEvent): void {  
    const imagen: HTMLElement = <HTMLElement>event.target;
    imagen.style.opacity = '0.5'; 
  }

  public onImageLeave(event: MouseEvent): void {  
    const imagen: HTMLElement = <HTMLElement>event.target;
    imagen.style.opacity = '1'; 
  }

  public changeText(): void {
    this.title = 'Recomendadas';
  }
}
