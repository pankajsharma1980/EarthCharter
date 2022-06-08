import { Component, OnInit } from '@angular/core';
import { LiveSearchService } from '../live-search.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  json: any;
  card = []

  constructor(public searchJson: LiveSearchService, private sanitizer: DomSanitizer, private http: HttpClient) {
  }

  ngOnInit() {

    this.searchJson.getCardList().subscribe((data: any) => {
      this.json = data.card;
    });

}
}
