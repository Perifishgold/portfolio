import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { AboutComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';
import { PortfolioProjectComponent } from './components/project/portfolio-project.component';
import { ImageSliderComponent } from './components/project/image-slider.component';
import { FeaturedComponent } from './components/project/featured.component';
import { ProjectDescriptionComponent } from './components/project/project-description.component';
import { PortfolioLogoComponent } from './components/anchors/portfolio-logo.component';
import { PortfolioHeaderComponent } from './components/anchors/portfolio-header.component';
import { ProjectSelectionViewComponent } from './components/project/project-selection-view.component';
import { ZoomInDirective } from './directives/zoom-in.directive';
import { PortfolioMainComponent } from './components/portfolio-main.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PortfolioProjectComponent,
    ImageSliderComponent,
    FeaturedComponent,
    ProjectDescriptionComponent,
    PortfolioLogoComponent,
    PortfolioHeaderComponent,
    ProjectSelectionViewComponent,
    ZoomInDirective,
    PortfolioMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
