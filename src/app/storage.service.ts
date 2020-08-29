import { Injectable } from '@angular/core';
import { Plan } from './models/plan';

enum Key {
  Version,
  Plans,
  ExternalPlans
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    const newVersion = "202008300229";
    let oldVersion = this.get<string>(Key[Key.Version]);

    if (newVersion != oldVersion) {
      this.set(Key[Key.Version], newVersion);
      this.remove(Key[Key.Plans]);
      this.remove(Key[Key.ExternalPlans]);
    }
  }

  getPlans(): Plan[] {
    let result = this.get(Key[Key.Plans]);
    if (result == null) {
      return [];
    }

    return Plan.fromArray(result);
  }

  setPlans(value: Plan[]) {
    if (value == null) {
      this.remove(Key[Key.Plans]);
    } else {
      this.set(Key[Key.Plans], value);
    }
  }

  getExternalPlans(): Plan[] {
    let result = this.get(Key[Key.ExternalPlans]);
    if (result == null) {
      return [];
    }

    return Plan.fromArray(result);
  }

  setExternalPlans(value: Plan[]) {
    if (value == null) {
      this.remove(Key[Key.ExternalPlans]);
    } else {
      this.set(Key[Key.ExternalPlans], value);
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
