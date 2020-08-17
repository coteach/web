import { Component } from '@angular/core';
import { CrawlService } from './crawl.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(
    private service: CrawlService,
  ) { }
}
