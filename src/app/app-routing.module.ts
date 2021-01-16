import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactDetailsComponent} from "./components/contact-details.component";
import {HomeComponent} from "./components/home.component";
import {FinalProjectComponent} from "./components/final-project.component";
import {FourthYearProjectsComponent} from "./components/fourth-year-projects.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'final-project', component: FinalProjectComponent },
  { path: 'fourth-year-projects', component: FourthYearProjectsComponent },
  { path: 'contactDetails', component: ContactDetailsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
