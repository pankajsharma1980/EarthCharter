import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../_services/scroll.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private scrollService: ScrollService) {
  } 
  ngOnInit(): void {
  }

  scrollToId(id: string) {
    console.log("element id : ", id);
    this.scrollService.scrollToElementById(id);
  }
}
