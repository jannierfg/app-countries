import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './pages/countries/countries.component';
import { CountriesDetComponent } from './pages/countries-det/countries-det.component';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: ':code', component: CountriesDetComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
