import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any) {
    const resultCountry = [];
    for (let country of value) {
      if (country.capital?.toLowerCase().indexOf(arg.toLowerCase()) > -1
      || country.name?.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCountry.push(country);
      }
    }
    return resultCountry;
  }
}
