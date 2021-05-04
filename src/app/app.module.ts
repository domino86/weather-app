import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './shared/components/dialog/dialog.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherReportComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, WeatherReportComponent, DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressBarModule,
    RouterModule.forRoot(routes),
    MatProgressBarModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
