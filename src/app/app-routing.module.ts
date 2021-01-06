import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from "./components/portfolio.component";
import {ContactDetailsComponent} from "./components/contact-details.component";
import {HomeComponent} from "./components/home.component";
import {FinalProjectComponent} from "./components/final-project.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'final-project', component: FinalProjectComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contactDetails', component: ContactDetailsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
