import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  public contents: {title: string; img: string}[] = [
    {title: "Werckmeister Harmóniák", img: 'https://64.media.tumblr.com/0f0d2b9f0fba29f2a240c02a8a717b1f/tumblr_njkdjxr0J41tbl51ro1_1280.png'},
    {title: "Aaltra", img: 'https://static.filmin.es/images/media/9157/1/still_0_3_1360x765.png'},
    {title: "L'amico di famiglia", img: 'https://www.justwatch.com/images/backdrop/257454715/s640/the-family-friend'},
    {title: "De helaasheid der dingen", img: 'https://vfdb.be/admin/uploads/resized/1581300677_de-helaasheid-der-dingen-04.jpg?w=800'},
    {title: "Dheepan", img: 'https://vhx.imgix.net/criterionchannelchartersu/assets/cdcfe6d4-f0e2-4548-8f05-0ece3cf4e1e0-13082656.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280'},
    {title: "Adams aebler", img: 'http://www.austinchronicle.com/binary/19b6/AdamsApples.jpg'},
    {title: "Lilja 4-ever", img: 'https://1.bp.blogspot.com/-Mecbrp21kQM/WwFmMfzRdDI/AAAAAAABICg/Cmg0UZit0hYltHrTQ9m_PmcfAvlQdNbCQCLcBGAs/s1600/de90d3f16f60756318ea2e9529cf2ab3.jpg'},
    {title: "Yomeddine", img: 'https://es.web.img3.acsta.net/videothumbnails/19/02/28/15/25/4311712.jpg'},
    {title: "La Isla", img: 'https://1.bp.blogspot.com/-RYO4AZExy20/VhRbWhMZ6mI/AAAAAAAAPAE/fspqMh7sKx8/s1600/la%2Bisla4.jpg'},
    {title: "Incendies", img: 'https://lwlies.com/wp-content/uploads/2020/09/incendies-1.jpg'}
  ];
  public counter: number = 0;
  

  public previous(): void {
    if(this.counter === 0){
      this.counter = this.contents.length - 1;
    } else {
      this.counter--;
    }
  }

  public next(): void {
    if(this.counter === this.contents.length - 1){
      this.counter = 0;
    } else {
      this.counter++;
    }
  }

}
