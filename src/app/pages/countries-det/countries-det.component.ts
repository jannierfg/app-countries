import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-countries-det',
  templateUrl: './countries-det.component.html',
  styleUrls: ['./countries-det.component.css'],
})
export class CountriesDetComponent implements OnInit {
  public loading: boolean = false;
  private code: any = '';
  public map: L.Map | undefined;
  public name: string = '';
  public region: string = '';
  public subregion: string = '';
  public population: string = '';
  public languages: any[] = [];
  public borders: string = '';
  public latlng: string = '';

  // Layer de el mapa
  googleMaps = L.tileLayer(
    'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }
  );

  constructor(
    private _countriesService: CountriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('code');

    this.getCountry();
    this.initMap();
  }

  initMap() {}

  getCountry() {
    this.loading = true;
    this._countriesService.getCountry(this.code).subscribe(
      (res) => {
        this.loading = false;
        this.name = res.name;
        this.region = res.region;
        this.subregion = res.subregion;
        this.population = res.population;
        this.languages = res.languages;
        this.borders = res.hasOwnProperty('borders') ? res.borders.toString() : 'No tiene información';
        this.latlng = res.latlng.toString();

        // cargamos el mapa y la ubicación de el pais
        let latlng;
        if (res.latlng) {
          latlng = res.latlng;
        } else {
          latlng = [4.658383846282959, -74.09394073486328]
        }
        this.map = L.map('map', {
          center: latlng,
          zoom: 4,
          layers: [this.googleMaps],
          attributionControl: false,
          zoomControl: false,
        });

        L.marker(latlng).addTo(this.map);
      },
      (err) => console.error(err)
    );
  }
}
