import { TestBed } from '@angular/core/testing';

import { CrawlService } from './crawl.service';

describe('CrawlService', () => {
  let service: CrawlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrawlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
