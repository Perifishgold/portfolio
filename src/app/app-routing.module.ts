import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home.component";
import {PortfolioProjectComponent} from "./components/project/portfolio-project.component";
import {ProjectSelectionViewComponent} from "./components/project/project-selection-view.component";
import {ProjectDetailsResolver} from "./resolver/project-details.resolver";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: 'project',
        component: PortfolioProjectComponent,
        resolve: {projectsCollection: ProjectDetailsResolver}
    },
    {
        path: 'project-select',
        component: ProjectSelectionViewComponent,
        resolve: {projectsCollection: ProjectDetailsResolver}
    },
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
