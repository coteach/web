import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from './plan';
import { PlanOrigin } from './plan-origin';

const GITHUB_URL = "https://raw.githubusercontent.com/coteach/server/feature/scrapers/services/scraper/outputs/{file_name}.json";
const PLANS_URL = GITHUB_URL.replace("{file_name}", "plans");
const ORIGINS_URL = GITHUB_URL.replace("{file_name}", "origin");


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  searchPlan(keyword: string): Promise<Plan[]> {
    const keywords = keyword.split(" ").filter(text => text != "");
    let includeKeywords = (plan: Plan) => keywords.every(keyword =>
      plan.title.includes(keyword) || plan.formats?.includes(keyword)
    );

    return this.fecthPlans().then(plans => plans.filter(includeKeywords));
  }

  getPlanOrigins(): Promise<PlanOrigin[]> {
    return this.httpClient.get(ORIGINS_URL).toPromise().then(response => PlanOrigin.fromArray(response));
  }

  fecthPlans(): Promise<Plan[]> {
    return this.httpClient.get(PLANS_URL).toPromise().then(response => Plan.fromArray(response));
  }
}


