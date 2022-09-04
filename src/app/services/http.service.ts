import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string, options?: any): Observable<any> {
    return this.http.get(this.buildUrl(url));
  }

  private buildUrl(url: string) {
    return url.startsWith('http') ? url : environment.apiUrl + url;
  }
}
