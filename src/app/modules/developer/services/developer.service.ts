import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(private httpClient: HttpClient) { }

  getDevelopers(): Observable<any> {
    return this.httpClient.get('https://run.mocky.io/v3/56f70157-e4f5-42d2-ab47-ee06abcda82c');
  }

}
