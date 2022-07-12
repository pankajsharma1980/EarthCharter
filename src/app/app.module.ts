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
import { IndexContributionsPlanetComponent } from './index-contributions-planet/index-contributions-planet.component';
import { IndexContributionsLifeComponent } from './index-contributions-life/index-contributions-life.component';
import { IndexContributionsIntegrityComponent } from './index-contributions-integrity/index-contributions-integrity.component';
import { IndexContributionsJusticeComponent } from './index-contributions-justice/index-contributions-justice.component';
import { ImprovingContributionsPlanetComponent } from './improving-contributions-planet/improving-contributions-planet.component';
import { ImprovingContributionsLifeComponent } from './improving-contributions-life/improving-contributions-life.component';
import { ImprovingContributionsIntegrityComponent } from './improving-contributions-integrity/improving-contributions-integrity.component';
import { ImprovingContributionsJusticeComponent } from './improving-contributions-justice/improving-contributions-justice.component';
import { ImproveUnderstandingPlanetComponent } from './improve-understanding-planet/improve-understanding-planet.component';
import { ImproveUnderstandingLifeComponent } from './improve-understanding-life/improve-understanding-life.component';
import { ImproveUnderstandingIntegrityComponent } from './improve-understanding-integrity/improve-understanding-integrity.component';
import { ImproveUnderstandingJusticeComponent } from './improve-understanding-justice/improve-understanding-justice.component';


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
    IndexContributionsPlanetComponent,
    IndexContributionsLifeComponent,
    IndexContributionsIntegrityComponent,
    IndexContributionsJusticeComponent,
    ImprovingContributionsPlanetComponent,
    ImprovingContributionsLifeComponent,
    ImprovingContributionsIntegrityComponent,
    ImprovingContributionsJusticeComponent,
    ImproveUnderstandingPlanetComponent,
    ImproveUnderstandingLifeComponent,
    ImproveUnderstandingIntegrityComponent,
    ImproveUnderstandingJusticeComponent,
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
