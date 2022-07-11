import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { LiveSearchService } from './live-search.service';
import { VideoComponent } from './video/video.component';
import { ChartCarouselComponent } from './chart-carousel/chart-carousel.component';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleFormComponent } from './google-form/google-form.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ImprovingContributionsComponent } from './improving-contributions/improving-contributions.component';
import { ImproveUnderstandingComponent } from './improve-understanding/improve-understanding.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideoComponent,
    ChartCarouselComponent,
    GoogleFormComponent,
    CarouselComponent,
    ImprovingContributionsComponent,
    ImproveUnderstandingComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule

  ],

  providers: [LiveSearchService],
  bootstrap: [AppComponent]
})

export class AppModule { }
