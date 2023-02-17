import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  lessOpacity(){
    const header = document.getElementsByTagName('header')[0];
    header.style.opacity = '0.5';
  }
  plusOpacity(){
    const header = document.getElementsByTagName('header')[0];
    header.style.opacity = '1';
  }

  changeTitle(){
    const header_h1 = document.getElementsByTagName('h1')[0];
    header_h1.textContent = 'Changed Title!';
  }
}
