import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PortfolioProject, PortfolioProjects} from "../models/portfolio-project.model";

@Injectable({providedIn: 'root'})
export class ProjectDetailsResolver implements Resolve<PortfolioProjects> {
    private readonly STRINGS_ASSETS_PATH = 'assets/strings'

    constructor(private http: HttpClient, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<PortfolioProjects> | PortfolioProjects {
        let project = this.router.getCurrentNavigation().extras.state?.project as PortfolioProject;
        if (project) {
            return {projects: [project]};
        }

        let detailsLocation = route.paramMap.get('collection');
        if (!detailsLocation) {
            this.router.navigate(['home']);
        }

        let url = `${this.STRINGS_ASSETS_PATH}/${detailsLocation}.json`;
        return this.http.get<PortfolioProjects>(url);
    }
}
