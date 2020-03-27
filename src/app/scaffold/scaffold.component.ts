import { Component } from '@angular/core';
import { Urls } from '../app-routing.module';

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent {
  urls = Urls;
}
