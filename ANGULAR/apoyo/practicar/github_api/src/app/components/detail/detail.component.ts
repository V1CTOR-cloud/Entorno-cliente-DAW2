import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/profile.model';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() photo: string = "";
  @Input() userName: string = "";
}
