import { Component, OnInit } from '@angular/core';
import { CrawlService } from '../crawl.service';
import { Plan } from '../models/plan';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

const COLUMNS: string[] = ['name', 'formats'];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(
    private crawlService: CrawlService,
    private service: AppService,
    private route: ActivatedRoute,
  ) { }

  readonly columns = COLUMNS;
  plans: Plan[];
  starList: string[];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let keywords = params["q"].split(" ").filter(text => text != "");
      let includeKeywords = (plan: Plan) => keywords.every(keyword =>
        plan.title.includes(keyword) || plan.formats.includes(keyword)
      );

      this.crawlService.getData().then(plans => plans.filter(includeKeywords))
        .then(plans => this.plans = plans);
    });
  }

  openPage(plan: Plan): void {
    window.open(plan.origin, '_blank');
  }

  hasStar(plan: Plan): boolean {
    return this.service.getStarList().includes(plan.id);
  }

  setStar(plan: Plan): void {
    if (this.hasStar(plan)) {
      this.service.deleteStar(plan.id);
    } else {
      this.service.postStar(plan.id);
    }
  }
}
