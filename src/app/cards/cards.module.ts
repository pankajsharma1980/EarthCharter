import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    CardsRoutingModule
  ],
  declarations: [CardComponent]
})
export class CustomersModule { }

