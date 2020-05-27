import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';
import { PartnerService } from './partner.service';
import { PartnerTableComponent } from './partner-table/partner-table.component';
import { PartnerChartComponent } from './partner-chart/partner-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    PartnerFormComponent,
    PartnerTableComponent,
    PartnerChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ PartnerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
