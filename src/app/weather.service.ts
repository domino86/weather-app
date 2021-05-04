import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay, shareReplay, share } from 'rxjs/operators';
import { AppConfig } from './shared/config/api-config';

@Injectable({ providedIn: 'root' })
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherForCities(citiesIds: number[]): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/group?id=${citiesIds}&units=metric&APPID=${AppConfig.API_KEY}`
    return this.http.get<any>(path).pipe(
      map(data => ({
        list: data.list,
        images: data.list.map(city => city = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`)
      })),
      delay(500)
    );
  }

  getForecastForCity(cityId: number) {
    const path = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&cnt=8&units=metric&APPID=${AppConfig.API_KEY}`
    return this.http.get<any>(path).pipe(
      delay(500)
    );
  }
}
