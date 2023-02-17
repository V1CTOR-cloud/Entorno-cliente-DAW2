import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public servicio: DataService,) { }

  public profiles: Profile[] = [];


  public getProfiles(){
    this.servicio.getProfilesDeveloper().subscribe(response => {
      this.profiles = response.items;
    })
  }

  ngOnInit(): void {
    this.getProfiles();
  }

}
