import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private httpClient: HttpClient,
  ) {
    this.starList = [];
  }

  private starList: string[];

  getNew(): Promise<string> {
    let url = "https://codimd.schl.tw/api/new";
    let getNewId = (error: HttpErrorResponse) => {
      return Math.random().toString(16).slice(2);
      // return error.url.split('/').pop();
    };

    return this.httpClient.get<string>(url)
      .toPromise()
      .catch(getNewId);
  }

  getStarList(): string[] {
    return this.starList;
  }

  postStar(id: string): void {
    if (!this.starList.includes(id)) {
      this.starList.push(id);
    }
  }

  deleteStar(id: string): void {
    const index = this.starList.findIndex(p => p === id);
    if (index > -1) {
      this.starList.splice(index, 1);
    }
  }
}
