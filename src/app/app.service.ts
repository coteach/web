import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Plan } from './models/plan';
import { StorageService } from './storage.service';
import { CrawlService } from './crawl.service';
import { MockData } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private httpClient: HttpClient,
    private storage: StorageService,
    private crawlService: CrawlService,
  ) {
    this.initialized = this.initStorage();
  }

  private initialized: Promise<void>;

  private get plansAsync(): Promise<Plan[]> {
    return this.initialized.then(() => this.storage.getPlans());
  };

  private get myPlansAsync(): Promise<Plan[]> {
    return this.plansAsync.then(plans => plans.filter(plan => plan.userId == this.getMyId()));
  }

  private initStorage(): Promise<void> {
    let initExternalPlnas = (): Promise<string> => new Promise(resolve => {
      let result;
      if (this.storage.getExternalPlans().length == 0) {
        result = this.crawlService.getData().then(plans => this.storage.setExternalPlans(plans));
      }

      resolve(result);
    });

    let initPlnas = (): void => {
      if (this.storage.getPlans().length == 0) {
        let externalPlans = this.storage.getExternalPlans();
        let plans = MockData.plans.concat(externalPlans);
        this.storage.setPlans(plans);
      }
    };

    return initExternalPlnas().then(initPlnas);
  }

  getMyId(): string {
    return MockData.myId;
  }

  async getNew(): Promise<string> {
    let untitledPlan = new Plan({
      id: Math.random().toString(16).slice(2),
      userId: this.getMyId(),
      title: "Untitled",
      lastchangeAt: new Date(),
    });

    let plans = await this.plansAsync;
    plans.push(untitledPlan);
    this.storage.setPlans(plans);

    return untitledPlan.id;
  }

  async getStarred(): Promise<Plan[]> {
    return this.plansAsync.then(plans => plans.filter(plan => plan.starred));
  }

  getMyPlans(): Promise<Plan[]> {
    return this.myPlansAsync;
  }

  async deleteMyPlan(id: string): Promise<void> {
    let plans = (await this.plansAsync).filter(value => value.id != id);

    this.storage.setPlans(plans);
  }

  getPlan(id: string): Promise<Plan> {
    return this.plansAsync.then(plans => plans.find(p => p.id == id));
  }

  getPlanByTitle(title: string): Promise<Plan> {
    return this.plansAsync.then(plans => plans.find(p => p.title == title));
  }

  async putPlan(plan: Plan): Promise<void> {
    let plans = (await this.plansAsync).filter(value => value.id != plan.id);
    plans.push(plan);
    this.storage.setPlans(plans);
  }

  searchPlan(keyword: string): Promise<Plan[]> {
    const keywords = keyword.split(" ").filter(text => text != "");
    let includeKeywords = (plan: Plan) => keywords.every(keyword =>
      plan.title.includes(keyword) || plan.formats?.includes(keyword)
    );

    return this.plansAsync.then(plans => plans.filter(includeKeywords));
  }
}
