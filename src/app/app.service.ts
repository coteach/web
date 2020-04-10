import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  getNew(): Promise<string> {
    let url = "http://planhub.schl.tw/new";
    let getNewId = (error: HttpErrorResponse) => {
      return error.url.split('/').pop();
    };

    return this.httpClient.get<string>(url)
      .toPromise()
      .catch(getNewId);
  }
}
