import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { ScrollService } from '../_services/scroll.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
// import { throwError } from 'rxjs';


// export interface PhotosApi {
//   albumId?: number;
//   id?: number;
//   title?: string;
//   url?: string;
//   thumbnailUrl?: string;
// }
export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable({
  providedIn: 'root'
})


export class AppComponent implements OnInit {

  apiData: PhotosApi;
  limit: number = 10; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      350: {
        items: 1
      },
      500: {
        items: 5
      }
    }
  };

  constructor (private scrollService: ScrollService, private router: Router,private http: HttpClient) {}

  scrollToId(id: string) {
    console.log("element id : ", id);
    this.scrollService.scrollToElementById(id);
  }

  scrollToElement(element: HTMLElement) {
    this.scrollService.scrollToElement(element);
  }

  
  ngOnInit() {
    this.router.navigate([''])
    // this.fetch();
  }
  // fetch() {
  //   const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${
  //     this.limit
  //   }`;
  //   const http$ = this.http.get<PhotosApi>(api);

  //   http$.subscribe(res => (this.apiData = res), err => throwError(err));
  // }

}
