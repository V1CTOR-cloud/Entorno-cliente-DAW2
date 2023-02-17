import { Component } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public service: DataService,) { }

  public profiles: Profile[] = [];
  public position: number = 0;


  public getProfiles(){
    this.service.getProfilesDavid().subscribe(response => {
      this.profiles = response.items;
    })
  }

  public previous(){
    if(this.position !== 0){
      this.position -= 1;
    } else {
      this.position = this.profiles.length - 1;
    }
  }

  public next(){
    if(this.position === this.profiles.length - 1){
      this.position = 0;
    } else {
      this.position += 1;
    }
  }

  ngOnInit(): void {
    this.getProfiles();
  }
}
