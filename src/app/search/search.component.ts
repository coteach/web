import { Component, OnInit } from '@angular/core';
import { CrawlService } from '../crawl.service';
import { ExtenalPlan } from '../models/external-plan';
import { ActivatedRoute } from '@angular/router';

const COLUMNS: string[] = ['name', 'formats'];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(
    private service: CrawlService,
    private route: ActivatedRoute,
  ) { }

  readonly columns = COLUMNS;
  extenalPlans: ExtenalPlan[];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let keywords = params["q"].split(" ").filter(text => text != "");
      let includeKeywords = (plan: ExtenalPlan) => keywords.every(keyword =>
        plan.name.includes(keyword) || plan.formats.includes(keyword)
      );

      this.service.getData().then(plans => plans.filter(includeKeywords))
        .then(plans => this.extenalPlans = plans);
    });
  }

  openPage(plan: ExtenalPlan): void {
    window.open(plan.page, '_blank');
  }
}
