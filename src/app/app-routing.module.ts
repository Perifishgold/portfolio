import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home.component";
import {FinalProjectComponent} from "./components/final-project.component";
import {FourthYearProjectsComponent} from "./components/fourth-year/fourth-year-projects.component";
import {ThirdYearProjectsComponent} from "./components/third-year/third-year-projects.component";
import {SecondYearProjectsComponent} from "./components/second-year/second-year-projects.component";
import {FirstYearProjectsComponent} from "./components/first-year/first-year-projects.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'final-project', component: FinalProjectComponent},
    {path: 'fourth-year-projects', component: FourthYearProjectsComponent},
    {path: 'third-year-projects', component: ThirdYearProjectsComponent},
    {path: 'second-year-projects', component: SecondYearProjectsComponent},
    {path: 'first-year-projects', component: FirstYearProjectsComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
