import { Component, OnInit } from '@angular/core';
import { LiveSearchService } from '../live-search.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-chart-carousel',
  templateUrl: './chart-carousel.component.html',
  styleUrls: ['./chart-carousel.component.css'],
})
export class ChartCarouselComponent implements OnInit {
  selectedValue = 0;

  json: any;
	liveData: any;
	liveDataa: any;
	graph5: any;
	graph55: any;

  constructor(public searchJson: LiveSearchService, private sanitizer: DomSanitizer, private http: HttpClient) {
  }

  ngOnInit() {

    this.setNavigationData1();
    this.setNavigationData11();
  
  }

  setNavigationData1() {

    this.searchJson.getCountriesData1().subscribe((data: any) => {

      this.liveData = data;

      this.graph5 = {

        data: this.liveData

      };


    });



  };

  setNavigationData11() {

    this.searchJson.getCountriesData11().subscribe((data: any) => {

      this.liveDataa = data;

      this.graph55 = {

        data: this.liveDataa,
        



      };

    });



  };

}

