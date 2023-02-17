import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public title: string = "Info";
  public links: string[] = ["España", "Francia", "Portugal", "Alemania"];
  public clase: string = "oculto";
  public contador: number = 0;
  
  public onClick(): void{
    if(this.contador === 0){
      this.clase = "oculto";
      this.contador = 1;
    } else {
      this.clase = "visible"
      this.contador = 0;
    }
  }

}
