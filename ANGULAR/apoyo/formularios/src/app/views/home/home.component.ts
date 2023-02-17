import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public operations: string[] = ["one", "two", "three", "four"];
  public counter: number = 0;
  public operacion: string = this.operations[this.counter];
  public listTwo: string[] = ["https://images.csmonitor.com/csmarchives/2010/11/1122-CBILLIONAIRES-01-GATES-PHILANTHROPY-THE-GIVING-PLEDGE.jpg?alias=standard_900x600", "https://cdn.vox-cdn.com/thumbor/QyPXZ5GxvulN34zHGrHWbu6MrQc=/0x0:4256x2832/1200x0/filters:focal(0x0:4256x2832):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3778374/GettyImages-164681904.0.jpg", "https://chronicle.brightspotcdn.com/59/71/a01c77e4d55d1e31350a7d674066/gatesimmunization.jpg"];
  public paragraphs: boolean = true;
  public listThree: string[][] = [
    ["https://assets3.cbsnewsstatic.com/hub/i/r/2013/08/12/909a87d7-55a6-4969-ab72-696582287be1/thumbnail/640x464/fb93fba7d58cfa8149f303fb908b0294/84750452.jpg", "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/09/bill-melinda-gates-junto-warren-buffet-2803909.jpg?tf=1080x", "https://i.insider.com/5da71e08cc4a0a33495f6203?width=700"],
    ["https://images.hola.com/tod/images/0272-14635ee668b5-930993aaedc8-1000/horizontal-1200/mackenzie-scott.jpg", "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/10/15193539/Murio-Paul-Allen-2.jpg", "https://www.arabianbusiness.com/cloud/2021/10/14/aGnRMobn-Prince-Alwaleed-Bin-Talal-Al-Saud.jpg"],
    ["https://www.gannett-cdn.com/media/2015/12/17/DetroitFreePress/DetroitFreePress/635859872990961057-Manoj-Bhargava.JPG?width=660&height=595&fit=crop&format=pjpg&auto=webp", "https://imgsrv2.voi.id/Kamp1ggEPxVR3iuPrPsXj5HvWIVFHZmmrEolAbCdW8A/auto/970/544/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MDc5NS8yMDIxMDUxMTExMjctbWFpbi5jcm9wcGVkXzE2MjA3MDcyNTguanBn.jpg", "https://www.philanthropyage.org/media/mmed5rvu/sheikh-dr-mohammed-bin-musallem-bin-ham-al-ameri-_social.jpg?width=1200"],];
 

  public onClick(): void {
    if(this.counter === 3){
      this.counter = 0;
    } else{
      this.counter++;
    }
    this.operacion = this.operations[this.counter];
  }

  public onParagraph(): void {
    this.paragraphs = !this.paragraphs;
  }
}
