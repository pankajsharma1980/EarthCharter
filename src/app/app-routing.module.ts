import { NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ScrollService } from '../_services/scroll.service';
import { CarouselModule  } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';


PlotlyModule.plotlyjs = PlotlyJS;
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';   



const routes: Routes = [
];

@NgModule({
  
  declarations: [
    ChartComponent, HomeComponent,  CardComponent, DropdownListComponent
  ],

  imports: [ 
    
    RouterModule.forRoot([
    { path: 'Chart', component: ChartComponent },
    { path: 'Home', component: HomeComponent },
    { path: '**', redirectTo: '/Home' },

  ]),

  PlotlyModule, FormsModule, BrowserModule, CommonModule, CarouselModule



],
providers: [ScrollService],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
  }


 }
