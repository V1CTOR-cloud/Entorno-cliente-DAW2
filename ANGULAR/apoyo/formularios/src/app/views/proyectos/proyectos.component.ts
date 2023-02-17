import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  public photos: string = "one";
  public list: {case: string, route: string, title: string; img: string}[] = [
    {case: 'two', route: "cambioclimatico", title: "Cambio climático", img: 'https://rnz-ressh.cloudinary.com/image/upload/s--RRPcVj8M--/c_scale,f_auto,q_auto,w_1050/4LTT3YP_image_crop_141298'},
    {case: 'three', route: "energia", title: "Energía", img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/1E1B/production/_122970770_gettyimages-538536811.jpg'},
    {case: 'four', route: "sanidad", title: 'Sanidad', img: 'https://www.castillalamancha.es/sites/default/files/styles/colorbox/public/documentos/fotografias/20221003/p1geejttnrc4v184l7qd1ghve354.jpg?itok=eA4GebHR'},
    {case: 'five', route: "saneamiento", title: "Saneamiento", img: 'https://assets.leroymerlin.es/is/image/lmes/instalacion-de-canalizaciones-y-desague-en-casa-tuberias-y-arquetas-6-3.jpg?$lmesBgTablet$&fit=constrain,0'},
  ];
  public menu: number[][] = [[0, 1], [2, 3]];


  public onClick(photo: number): void {
    let myArr: string[] = ["one", "two", "three", "four", "five"];
    this.photos = myArr[photo];
  }
}
