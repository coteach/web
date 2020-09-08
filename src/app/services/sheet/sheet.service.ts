import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from '../api/plan';
import { PlanOrigin } from '../api/plan-origin';

const Id = "1Is5D7gbqlrUFWrs0a906In6hWYaO0snfgnGTr7UWNKE";
const Url = "https://spreadsheets.google.com/feeds/list/{id}/{index}/public/values?alt=json".replace("{id}", Id);

enum Sheet {
  origin = 1,
  plan,
}

@Injectable({
  providedIn: 'root'
})
export class SheetService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  fecthOrigins(): Promise<PlanOrigin[]> {
    const url = this.getUrl(Sheet.origin);

    return this.httpClient.get(url).toPromise().then(response => this.sheetToPlanOrigin(response));
  }

  fecthPlans(): Promise<Plan[]> {
    const url = this.getUrl(Sheet.plan);

    return this.httpClient.get(url).toPromise().then(response => this.sheetToPlan(response));
  }

  private getUrl(sheet: Sheet): string {
    return Url.replace("{index}", sheet.toString());
  }

  private sheetToPlanOrigin(json): PlanOrigin[] {
    return json.feed.entry.map(entry =>
      new PlanOrigin({
        id: entry.gsx$id.$t,
        name: entry.gsx$name.$t,
        url: entry.gsx$url.$t,
        logo: entry.gsx$logo.$t,
      }));
  }

  private sheetToPlan(json): Plan[] {
    return json.feed.entry.map(entry =>
      new Plan({
        originId: entry.gsx$origin.$t,
        title: entry.gsx$title.$t,
        page: entry.gsx$page.$t,
        formats: entry.gsx$formats.$t,
      }));
  }
}
