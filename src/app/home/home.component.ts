import { Component, OnInit } from '@angular/core';
import { LiveSearchService } from '../live-search.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  liveData: any;
  liveDataa: any;
  liveDataaa: any;
  list = []
  thumbnail: any;
  graph5: any;
  graph55: any;
  graph555: any;
  // graph5!: { data: any; };
  
  constructor(private router: Router, public searchJson: LiveSearchService, private sanitizer: DomSanitizer, private http: HttpClient) {
  }
  ngOnInit(): void {

    
 
    // this.searchJson.getCountriesData().subscribe((baseImage : any) => {
    // let objectURL = baseImage.image;
    // this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    // });

    
    this.setNavigationData1();
    this.setNavigationData11();
    this.setNavigationData111();
    
  }
  

  setNavigationData1() {

    this.searchJson.getCountriesData1().subscribe((data: any) => {

       this.liveData =  data;

       this.graph5 = {

          data: this.liveData



        };

    });

 

 };

 setNavigationData11() {

  this.searchJson.getCountriesData11().subscribe((data: any) => {

     this.liveDataa =  data;

     this.graph55 = {

        data: this.liveDataa



      };

  });



};

setNavigationData111() {

  this.searchJson.getCountriesData111().subscribe((data: any) => {

     this.liveDataaa =  data;

     this.graph555 = {

        data: this.liveDataaa



      };

  });



};


}
