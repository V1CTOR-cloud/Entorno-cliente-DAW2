import { Component } from '@angular/core';

@Component({
  selector: 'app-saneamiento',
  templateUrl: './saneamiento.component.html',
  styleUrls: ['./saneamiento.component.css']
})
export class SaneamientoComponent {
  public click: number = 0;
  public contador: number = 0;
  public contadorDos: number = 1;
  public contadorTres: number = 1;
  public contadorCuatro: number = 1;
  public contadorCinco: number = 1;
  public contadorSeis: number = 1;
  public foot: string = "Saneamiento";
  public imagenes: string[] = ["https://imagenes.elpais.com/resizer/LNlvr5m_3O0oNNgn82metOIUVnw=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/O3QIBWDJ4FB454KW4OYHLO3OPM.jpg", "https://gadgets-africa.com/wp-content/uploads/2022/09/Samsung-Reinvented-Toilet-Prototype.jpeg"];
  public case: string = "caseOne";
  
  public onClick(): void {
    this.click++;
    if(this.click === 1){
      this.contadorDos = 0;
    } else if(this.click === 2){
      this.contadorTres = 0;
    } else if(this.click === 3){
      this.contadorCuatro = 0;
    } else if(this.click === 4){
      this.case = "caseTwo";
      this.contadorDos = 1;
      this.contadorTres = 1;
      this.contadorCuatro = 1;
      this.foot = "Entre los proyectos destinados en esta campo de acción de la Fundación, destacan principalmente dos: OmniProcesor y Reinvent the Toilet Challenge.";
    }
  }

  public onImage(image: number): void {
    if(image === 0){
      this.contadorCinco = 0;
      this.case = "caseThree";
      this.foot = "Omni Processor";
    } else {
      this.contadorCinco = 1;
      this.contadorSeis = 0;
      this.case = "caseFour";
      this.foot = "Reinvent the Toilet Challenge.";
    }
  }

  public onIframe(): void {
    this.case = "caseTwo";
    this.contadorCinco = 1;
    this.contadorSeis = 1;
    this.foot = "Entre los proyectos destinados en esta campo de acción de la Fundación, destacan principalmente dos: OmniProcesor y Reinvent the Toilet Challenge.";
  }

}
