import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { AboutComponent } from './components/about.component';
import { PortfolioComponent } from './components/portfolio.component';
import { ContactDetailsComponent } from './components/contact-details.component';
import { HomeComponent } from './components/home.component';
import { PortfolioProjectComponent } from './components/project/portfolio-project.component';
import { FinalProjectComponent } from './components/final-project.component';
import { ImageSliderComponent } from './components/project/image-slider.component';
import { FeaturedComponent } from './components/project/featured.component';
import { ProjectDescriptionComponent } from './components/project/project-description.component';
import { PortfolioHeadlineComponent } from './components/anchors/portfolio-headline.component';
import { PortfolioHeaderComponent } from './components/anchors/portfolio-header.component';
import { ProjectSelectionViewComponent } from './components/project/project-selection-view.component';
import { FourthYearProjectsComponent } from './components/fourth-year-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    ContactDetailsComponent,
    HomeComponent,
    PortfolioProjectComponent,
    FinalProjectComponent,
    ImageSliderComponent,
    FeaturedComponent,
    ProjectDescriptionComponent,
    PortfolioHeadlineComponent,
    PortfolioHeaderComponent,
    ProjectSelectionViewComponent,
    FourthYearProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
