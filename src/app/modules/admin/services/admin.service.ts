import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  getAdmin(): Observable<any> {
    return this.httpClient.get('https://run.mocky.io/v3/25e3b49e-db30-453e-b714-a2f84092cba6');
  }
}
