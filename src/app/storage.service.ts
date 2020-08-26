import { Injectable } from '@angular/core';
import { Plan } from './models/plan';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getPlans(): Plan[] {
    let result = this.get("plans");
    if (result == null) {
      return [];
    }

    return Plan.fromArray(result);
  }

  setPlans(value: Plan[]) {
    if (value == null) {
      this.remove("plans");
    } else {
      this.set("plans", value);
    }
  }

  getExternalPlans(): Plan[] {
    let result = this.get("externalPlans");
    if (result == null) {
      return [];
    }

    return Plan.fromArray(result);
  }

  setExternalPlans(value: Plan[]) {
    if (value == null) {
      this.remove("externalPlans");
    } else {
      this.set("externalPlans", value);
    }
  }

  get<T>(key: string): T {
    let result = localStorage.getItem(key);

    if (result == null) {
      return null;
    }

    return JSON.parse(result);
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
