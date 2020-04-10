import { Component } from '@angular/core';
import { RouterLink } from '../constant';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent {
  constructor(
    private router: Router,
    private appService: AppService,
  ) { }

  routerLink = RouterLink;

  newPlan() {
    this.appService.getNew().then((id) => {
      this.router.navigate([RouterLink.Plan, id]);
    });
  }
}
