import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { fail } from 'assert';
import { AppConfig } from './shared/config/api-config';
import { citiesMock, forecastMock } from './test/mocks/weather-data.mock';

describe('WeatherService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let httpMock: HttpTestingController;
  let service: WeatherService;
  let citiesById: number[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
    citiesById = [3067696, 3169070, 2525068, 3060972, 2633274];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getWeatherForCities', () => {
    it('should return group of cities with data', () => {
      service.getWeatherForCities(citiesById).subscribe(
        cities => expect(cities).toEqual(citiesMock),
        fail
      );

      const req = httpMock.expectOne(`https://api.openweathermap.org/data/2.5/group?id=${citiesById}&units=metric&APPID=${AppConfig.API_KEY}`);

      expect(req.request.method).toBe("GET");

      req.flush(citiesMock);

      httpMock.verify();
    });
  });

  describe('#getForecastForCity', () => {
    it('should return group of cities with data', () => {
      const cityId = 3067696;

      service.getForecastForCity(cityId).subscribe(
        forecast => expect(forecast).toEqual(of(forecastMock)),
        fail
      );

      const req = httpMock.expectOne(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&cnt=8&units=metric&APPID=${AppConfig.API_KEY}`);

      expect(req.request.method).toBe("GET");

      req.flush(of(forecastMock));

      httpMock.verify();
    });

    it('should return an error when the server returns a 404', () => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      const cityId = 3067696;
      service.getForecastForCity(3067696).subscribe(
        forecast => fail('expected an error, not forecast'),
        error => expect(error.message).toContain('test 404 error')
      );

      const req = httpMock.expectOne(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&cnt=8&units=metric&APPID=${AppConfig.API_KEY}`);

      expect(req.request.method).toBe("GET");

      req.flush(of(errorResponse));

      httpMock.verify();
      
    });

  });

});
