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
  keyword = '';

  newPlan() {
    this.appService.getNew().then((id) => {
      this.router.navigate([RouterLink.Plan, id]);
    });
  }

  onSearch(): void {
    let isKeywordEmpty = this.keyword.trim().length == 0;
    if (isKeywordEmpty) return;

    this.router.navigate([RouterLink.Search], { queryParams: { q: this.keyword } });
  }
}
