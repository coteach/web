import { Injectable } from '@angular/core';
import { Plan } from './models/plan';
import { HttpClient } from '@angular/common/http';
import { MockData } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class CrawlService {
  result: Promise<Plan[]>;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getData(): Promise<Plan[]> { return this.fecthCSHS(); }

  private fecthCSHS(): Promise<Plan[]> {
    const url = "https://spreadsheets.google.com/feeds/list/1QMg26k3Kpj5oJo_ngiOQF9ysOHC7knISk4ewxEuk0bM/od6/public/values?alt=json";

    return this.httpClient.get(url).toPromise().then(response => this.googleSheetToPlan(response));
  }

  private googleSheetToPlan(json): Plan[] {
    return json.feed.entry.map(entry =>
      new Plan({
        id: MockData.randId(),
        title: entry.gsx$name.$t,
        origin: entry.gsx$page.$t,
        formats: "pdf",
        starredNumber: MockData.randNumber(),
        forkedNumber: MockData.randNumber(),
        lastchangeAt: new Date('2020-08-30'),
      }));
  }
}
