
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getLogin(): Observable<any> {
    return this.httpClient.get('https://run.mocky.io/v3/21f10f5d-8888-43c2-8167-2cbdc49b6e18');
  }
}
