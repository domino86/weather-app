import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherReportComponent } from './weather-report.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from '../weather.service';
import { of } from 'rxjs';

describe('WeatherReportComponent', () => {
  let component: WeatherReportComponent;
  let fixture: ComponentFixture<WeatherReportComponent>;
  let service: WeatherService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherReportComponent, DialogComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(WeatherService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign Observable to cities$ property', () => {
    expect(component.cities$).toBeTruthy();
  });

  describe('#getCityForecast', () => {

    it('should close all dialogs before open new', () => {
      const spyOnDialogClose = spyOn(component.dialog, 'closeAll');
      component.getCityForecast(3067696);
      fixture.detectChanges();
      expect(spyOnDialogClose).toHaveBeenCalled();
    });

    it('should assign Observable to cityForecast$ property', () => {
      component.getCityForecast(3067696);
      fixture.detectChanges();
      expect(component.cityForecast$).toBeTruthy();
    });

    it('should open dialog', () => {
      const spyOnDialogOpen = spyOn(component, 'getCityForecast');
      component.getCityForecast(3067696);
      fixture.detectChanges();
      expect(spyOnDialogOpen).toHaveBeenCalled();
    });

    it('should set loading to true on click', () => {
      component.getCityForecast(3067696);
      fixture.detectChanges();
      expect(component.loading).toEqual(true);
    });

    it('should set loading to false after http Observable return value', fakeAsync(() => {
      const spyOnService = spyOn(service, 'getForecastForCity').and.returnValue(of({}));
      component.getCityForecast(3067696);
      fixture.detectChanges();
      tick();
      expect(component.loading).toEqual(false);
    }));
  });


});
