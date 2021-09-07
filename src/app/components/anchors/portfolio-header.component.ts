import {Component} from '@angular/core';
import {ProjectLinkData} from "../../models/portfolio-project.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-portfolio-header',
    template: `
        <div class="projectsNavigation">
            <div class="projectTabs">
                <ng-container *ngFor="let project of this.projects">
                    <div appZoomIn
                         class="projectTab"
                         [ngClass]="{active: this.selectedProject==project}"
                         (click)="onSelect(project)">
                        <div class="topLabel" [ngClass]="project.type">{{project.topLabel}}</div>
                        <div class="bottomLabel">{{project.bottomLabel}}</div>
                    </div>
                </ng-container>
            </div>
        </div>
    `,
    styles: [`
        a {
            text-decoration: none;
        }

        .projectTabs {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-end;
        }

        .projectTab {
            margin-left: 3%;
            user-select: none;
            cursor: pointer;
        }

        .topLabel {
            margin: 2% 4%;
            text-align: right;
            font-family: LupaPinky, serif;
            letter-spacing: 0;
            color: #000000;
            opacity: 1;
            display: contents;
        }

        .active .topLabel {
            color: #B35656;
        }

        .bottomLabel {
            display: inline-block;
            font-size: 20px;
            line-height: 16px;
            text-align: right;
            font-family: LupaPinky, serif;
            letter-spacing: 0;
            color: #000000;
            opacity: 1;
            margin-right: 5px;
        }

        .active .bottomLabel {
            color: #B35656;
        }

        .primary {
            font-size: 44px;
            line-height: 15px;
        }

        .secondary {
            font-size: 28px;
            line-height: 12px;
        }
    `]
})
export class PortfolioHeaderComponent {
    projects: ProjectLinkData[];

    selectedProject: ProjectLinkData = null;

    constructor(private router: Router) {
        this.projects = [
            {
                topLabel: '2020',
                bottomLabel: 'שנה ה | פרויקט גמר',
                rout: 'project',
                collection: 'final-project',
                type: 'primary',
            }, {
                topLabel: '2019',
                bottomLabel: 'שנה ד',
                rout: 'project-select',
                collection: 'fourth-year-projects',
                type: 'secondary',
            }, {
                topLabel: '2018',
                bottomLabel: 'שנה ג',
                rout: 'project-select',
                collection: 'third-year-projects',
                type: 'secondary',
            }, {
                topLabel: '2017',
                bottomLabel: 'שנה ב',
                rout: 'project-select',
                collection: 'second-year-projects',
                type: 'secondary',
            }, {
                topLabel: '2016',
                bottomLabel: 'שנה א',
                rout: 'project-select',
                collection: 'first-year-projects',
                type: 'secondary',
            }
        ];
    }

    onSelect(project: ProjectLinkData) {
        this.selectedProject = project;
        this.goToProject(project)
    }

    goToProject(project: ProjectLinkData) {
        this.router.navigate([project.rout, {collection: project.collection}]);
    }
}
