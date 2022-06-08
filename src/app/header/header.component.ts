import { Component, OnInit } from '@angular/core';
import { LiveSearchService } from '../live-search.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ScrollService } from '../../_services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class HeaderComponent implements OnInit {

  json: any;
  nav = []

  constructor(public searchJson: LiveSearchService, private sanitizer: DomSanitizer, private http: HttpClient,private scrollService: ScrollService) {
  }

  ngOnInit() {

    this.searchJson.getMenuItemList().subscribe((data: any) => {
      this.json = data.nav;
    });

  }


scrollToId(id: string) {
  console.log("element id : ", id);
  this.scrollService.scrollToElementById(id);
}

scrollToElement(element: HTMLElement) {
  this.scrollService.scrollToElement(element);
}
}
