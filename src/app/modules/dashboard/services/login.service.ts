
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getLogin(): Observable<any> {
    return this.httpClient.get('https://run.mocky.io/v3/f3c7abe3-5322-4d5f-b5ee-d12b01d51805');
  }
}
