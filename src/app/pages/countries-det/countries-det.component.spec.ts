import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDetComponent } from './countries-det.component';

describe('CountriesDetComponent', () => {
  let component: CountriesDetComponent;
  let fixture: ComponentFixture<CountriesDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
