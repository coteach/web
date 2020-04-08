import { Component } from '@angular/core';
import { RouterLink } from '../constant';
@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent {
  routerLink = RouterLink;
}
