import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { concatMap, exhaustMap, filter, share, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  citiesById = [3067696, 3169070, 2525068, 3060972, 2633274];
  cities$: Observable<string>;
  cityForecast$: Observable<any>;
  images: Observable<URL>;
  loading: boolean;
  today: Date = new Date();

  constructor(
    private _weatherService: WeatherService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.cities$ = this._weatherService.getWeatherForCities(this.citiesById).pipe(
      share()
    );
  }

  getCityForecast(cityId: number) {
    this.loading = true;
    this.dialog.closeAll();

    this.cityForecast$ = this._weatherService.getForecastForCity(cityId).pipe(
      tap(() => {
        this.loading = false;
      }),
      share()
    );

    const dialogRef = this.dialog.open(DialogComponent, { data: { forecast: this.cityForecast$ }, panelClass: 'forecast-container' });
  }
}
