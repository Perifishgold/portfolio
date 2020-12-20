import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { AboutComponent } from './about.component';
import { PortfolioComponent } from './portfolio.component';
import { ContactDetailsComponent } from './contact-details.component';
import { HomeComponent } from './home.component';
import { PortfolioProjectComponent } from './portfolio-project.component';
import { FinalProjectComponent } from './final-project.component';
import { ImageSliderComponent } from './image-slider.component';


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
