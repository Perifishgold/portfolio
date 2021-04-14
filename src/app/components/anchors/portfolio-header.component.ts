import {Component} from '@angular/core';
import {ProjectData} from "../../models/project-data.model";

@Component({
    selector: 'app-portfolio-header',
    template: `
        <div class="projectsNavigation">
            <div class="projectTabs">
                <ng-container *ngFor="let project of this.projects; let i = index">
                    <a appZoomIn class="projectTab" [routerLink]="project.link" routerLinkActive="active">
                        <div class="topLabel" [ngClass]="project.type">{{project.topLabel}}</div>
                        <div class="bottomLabel">{{project.bottomLabel}}</div>
                    </a>
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
    projects: ProjectData[];

    constructor() {
        this.projects = [
            {
                topLabel: '2020',
                bottomLabel: 'שנה ה | פרויקט גמר',
                link: './final-project',
                type: 'primary',
                index: 1
            }, {
                topLabel: '2019',
                bottomLabel: 'שנה ד',
                link: './fourth-year-projects',
                type: 'secondary',
                index: 2
            }, {
                topLabel: '2018',
                bottomLabel: 'שנה ג',
                link: './third-year-projects',
                type: 'secondary',
                index: 3
            }, {
                topLabel: '2017',
                bottomLabel: 'שנה ב',
                link: './second-year-projects',
                type: 'secondary',
                index: 4
            }, {
                topLabel: '2016',
                bottomLabel: 'שנה א',
                link: './first-year-projects',
                type: 'secondary',
                index: 5
            }
        ];
    }


}
