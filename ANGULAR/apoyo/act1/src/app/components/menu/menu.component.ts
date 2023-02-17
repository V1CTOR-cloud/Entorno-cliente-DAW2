import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  cont :number = 0;

  ngOninit() {
    this.cont = 0;
    const menu = document.getElementsByTagName('ul')[0];
    menu.style.display = 'none';
  }

  show_hideMenu(){
    this.cont++;
    const menu = document.getElementsByTagName('ul')[0];
    this.cont % 2 === 0 ? menu.style.display = 'block' : menu.style.display = 'none';
  }

}
