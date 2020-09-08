import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '../constant';

@Component({
	selector: 'app-scaffold',
	templateUrl: './scaffold.component.html',
	styleUrls: ['./scaffold.component.scss'],
})
export class ScaffoldComponent {
	constructor(
		private router: Router,
	) { }

	routerLink = RouterLink;
	keyword: string = "";

	searchPlan(): void {
		this.router.navigate([RouterLink.Search], { queryParams: { q: this.keyword } });
	}
}
