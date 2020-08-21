import { Injectable } from '@angular/core';
import { Plan } from './models/plan';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrawlService {
  result: Promise<Plan[]>;

  constructor(
    private httpClient: HttpClient,
  ) {

    this.result = this.fecthCSHS();
  }

  private fecthCSHS(): Promise<Plan[]> {
    const url = "https://spreadsheets.google.com/feeds/list/1QMg26k3Kpj5oJo_ngiOQF9ysOHC7knISk4ewxEuk0bM/od6/public/values?alt=json";

    return this.httpClient.get(url).toPromise().then(response => Plan.fromGoogleSheet(response));
  }

  getData(): Promise<Plan[]> { return this.result; }
}
