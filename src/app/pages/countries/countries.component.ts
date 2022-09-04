import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  public countries: string[] = [];
  public filterCountry: string = '';
  public page: number = 1;
  public loading: boolean = false;

  constructor(private _countriesService: CountriesService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.loading = true;
    this._countriesService.getCountries().subscribe(
      (res) => {
        this.loading = false;
        this.countries = res;
      },
      (err) => console.error(err)
    );
  }
}
