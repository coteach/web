import { Component, OnInit, HostListener } from '@angular/core';
import { ExtenalPlan } from '../models/external-plan';
import { CrawlService } from '../crawl.service';

const COLUMNS: string[] = ['name', 'formats'];

@Component({
  selector: 'app-shared-plans',
  templateUrl: './shared-plans.component.html',
  styleUrls: ['./shared-plans.component.scss']
})
export class SharedPlansComponent implements OnInit {
  constructor(
    private service: CrawlService,
  ) { }

  readonly columns = COLUMNS;
  extenalPlans: ExtenalPlan[];

  ngOnInit(): void {
    this.service.getData().then(plans => this.extenalPlans = plans);
  }

  openLink(plan: ExtenalPlan): void {
    window.open(plan.link, '_blank');
  }


  // @HostListener('window:scroll', ['$event'])
  // onTableScroll(e) {
  //   console.log(1);
  //   const tableViewHeight = e.target.offsetHeight // viewport: ~500px
  //   const tableScrollHeight = e.target.scrollHeight // length of all table
  //   const scrollLocation = e.target.scrollTop; // how far user scrolled

  //   // If the user has scrolled within 200px of the bottom, add more data
  //   const buffer = 200;
  //   const limit = tableScrollHeight - tableViewHeight - buffer;
  //   if (scrollLocation > limit) {
  //     this.extenalPlans = this.extenalPlans.concat(MOCK_PLANS);
  //   }
  // }
}
