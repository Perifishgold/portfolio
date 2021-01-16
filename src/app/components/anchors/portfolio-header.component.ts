import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-portfolio-header',
    template: `
        <div class="projectsNavigation">
            <div class="projectTabs">
                <ng-container *ngFor="let project of this.projectLinks; let i = index">
                    <a class="projectTab" [routerLink]="project.link" routerLinkActive="active">
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

        .projectsNavigation {
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
            transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);

        }

        .projectTab:hover {
            transform: scale(1.025);
        }

        .topLabel {
            margin: 2% 4%;
            text-align: right;
            font-family: Lupa Pinky, serif;
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
            font-family: Lupa Pinky, serif;
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
export class PortfolioHeaderComponent implements OnInit {
    projectLinks: any[];
    activeLinkIndex = -1;

    constructor(private router: Router) {
        this.projectLinks = [
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

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.projectLinks.indexOf(this.projectLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }

}
