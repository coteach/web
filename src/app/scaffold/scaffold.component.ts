import { Component } from '@angular/core';
import { RouterLink } from '../constant';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
// import { NotifyService } from '../notify.service';
// import { Notify } from '../models/notify';

@Component({
	selector: 'app-scaffold',
	templateUrl: './scaffold.component.html',
	styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent {
	constructor(
		private router: Router,
		private appService: AppService,
		// public notifyService: NotifyService,
	) {}

	// notifies: Notify[] = [];
	routerLink = RouterLink;
	keyword = '';
	keyWordTags = {};
	hotTags = []

	ngOnInit() {
		// if (this.notifies.length == 0) this.subscribeMsgs();
		this.hotTags = ["年級", "科目"]
		this.keyWordTags = this.hotTags.reduce((a, key) => Object.assign(a, { [key]: "" }), {});
	}

	/* search */
	getHotTags(): string[] {
		return this.hotTags;
	}

	onSearch(): void {
		let ret=[this.keyword]
		for(let key of Object.keys(this.keyWordTags)){
			let value=this.keyWordTags[key];
			if(value!==undefined && value.length!=0){
				ret.push(key+":"+value)
			}
		}
		this.keyword=ret.join(' ')
		if (this.keyword.length==0) return;

		this.router.navigate([RouterLink.Search], { queryParams: { q: this.keyword } });
	}

	resetKeyword() {
		this.keyword = "";
	}

	/* msg */
	subscribeMsgs() {
		// this.notifyService.getMsgs().subscribe(notifies => this.notifies = notifies)
	}

	/* other feature */
	newPlan() {
		this.appService.getNew().then((id) => {
			this.router.navigate([RouterLink.EditingPlan, id]);
		});
	}
}
