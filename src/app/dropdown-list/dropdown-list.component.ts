import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { LiveSearchService } from '../live-search.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})


export class DropdownListComponent implements OnInit {


  
  selectedValue:any;
  json: any;
  //liveData= [];
  //liveDataa: any;
  //liveDataaa: any;
  list = []
  thumbnail: any;
  chart2: any;
  chart3: any;
  chart1: any
  chart4: any;
  chart5: any;
  chart7:  any;
  chart6:  any;
 ;
 ;
  constructor(public searchJson: LiveSearchService, private sanitizer: DomSanitizer, private http: HttpClient) {
  }
  ngOnInit(): void {

    
 
    // this.searchJson.getCountriesData().subscribe((baseImage : any) => {
    // let objectURL = baseImage.image;
    // this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    // });

    this.selectedValue="0";
    this.setNavigationDataChart1();
    this.setNavigationDataChart2();
    this.setNavigationDataChart3();
    this.setNavigationDataChart4();
    this.setNavigationDataChart5();
    this.setNavigationDataChart6();
    this.setNavigationDataChart7();
    
  }
  

  setNavigationDataChart1() {

    this.searchJson.getCountriesChart1().subscribe((data: any) => {

       //this.liveData =  data;

       this.chart1 = {

          data: data



        };

    });

 

 };

 setNavigationDataChart2() {

  this.searchJson.getCountriesChart2().subscribe((data: any) => {

     //this.liveDataa =  data;

     this.chart2 = {

        data: data


      };

  });



};

setNavigationDataChart3() {

  this.searchJson.getCountriesChart3().subscribe((data: any) => {

     //this.liveDataaa =  data;

     this.chart3 = {

        data: data


      };

  });



};
setNavigationDataChart4() {

  this.searchJson.getCountriesChart4().subscribe((data: any) => {

    // this.liveDataaa =  data;

     this.chart4 = {

        data: data



      };

  });



};

setNavigationDataChart5() {

  this.searchJson.getCountriesChart5().subscribe((data: any) => {

     //this.liveDataaa =  data;

     this.chart5 = {

        data: data



      };

  });



};

setNavigationDataChart6() {

  this.searchJson.getCountriesChart6().subscribe((data: any) => {

     //this.liveDataaa =  data;

     this.chart6 = {

        data: data



      };

  });



};

setNavigationDataChart7() {

  this.searchJson.getCountriesChart7().subscribe((data: any) => {

     //this.liveDataaa =  data;

     this.chart7 = {

        data: data



      };

  });



};
   
}



