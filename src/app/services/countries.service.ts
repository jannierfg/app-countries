import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpService) {}

  getCountries() {
    return this.http.get('all');
  }

  getCountry(code: string) {
    return this.http.get('alpha/' + code);
  }
}
