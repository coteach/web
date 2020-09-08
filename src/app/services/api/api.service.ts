import { Injectable } from '@angular/core';
import { SheetService } from '../sheet/sheet.service';
import { Plan } from './plan';
import { PlanOrigin } from './plan-origin';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private service: SheetService,
  ) { }

  searchPlan(keyword: string): Promise<Plan[]> {
    const keywords = keyword.split(" ").filter(text => text != "");
    let includeKeywords = (plan: Plan) => keywords.every(keyword =>
      plan.title.includes(keyword) || plan.formats?.includes(keyword)
    );

    return this.service.fecthPlans().then(plans => plans.filter(includeKeywords));
  }

  getPlanOrigins(): Promise<PlanOrigin[]> {
    return this.service.fecthOrigins();
  }
}
