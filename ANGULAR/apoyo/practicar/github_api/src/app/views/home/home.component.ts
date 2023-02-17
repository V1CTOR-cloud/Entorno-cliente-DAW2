import { Component } from '@angular/core';
import { Service } from 'src/app/services/service.service';
import { Item } from 'src/app/models/profile.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  word: string = 'V1CTOR-cloud';
  public profiles: Item[] = [];
  constructor(public service: Service) { }

  getResponse() {
    this.service.getProfiles(this.word).subscribe(response => {
      this.profiles = response.items
      console.log(this.profiles);
    })
  }

  ngOnInit(): void {
    this.getResponse()
  }  
}
