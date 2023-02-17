import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  public fontWeight: string = "500";
  public fontSize: string = "11rem";

  public onBanner(event: MouseEvent): void {
    const title: HTMLElement = <HTMLElement>event.target;
    if (event.type === 'mouseover') {
      title.style.fontWeight = "900";
      title.style.fontSize = "14rem";
    } else if (event.type === 'mouseout') {
      title.style.fontWeight = "500";
      title.style.fontSize = "11rem";
    }
  }
}
