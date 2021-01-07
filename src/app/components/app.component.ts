import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
        <div class="portfolioFlexContainer">
            <div class="projectsNavigation">
                <a *ngIf="this.activeLinkIndex!==0" routerLink="/home" routerLinkActive="active">
                    <app-portfolio-headline
                            [minimized]="true"
                            class="homePageLink">
                    </app-portfolio-headline>
                </a>
                <div class="projectTabs">
                    <ng-container *ngFor="let project of this.routeLinks; let i = index">
                        <div class="projectTab">{{project.label}}</div>
                    </ng-container>
                </div>
                <router-outlet></router-outlet>
            </div>
            <div class="generalNavigation">
                <div class="tabs verticalLine">
                    <div class="tab rotate">קורות חיים</div>
                    <div class="tab rotate">ART</div>
                    <div class="tab rotate">צור קשר</div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .portfolioFlexContainer {
            background: rgba(252, 252, 252, 0.5) url("../../assets/img/background2.jpg") no-repeat;
            background-size: cover;
            height: 100%;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .homePageLink {
            position: absolute;
            left: 8%;
            cursor: pointer;
            user-select: none;
            transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
        }

        .homePageLink:hover {
            transform: scale(1.025);
        }

        .projectsNavigation {
            padding-top: 5%;
            flex-grow: 1;
            height: 100%;
        }

        .projectTabs {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
        }

        .projectTab {
            margin: 2% 4%;
        }

        .generalNavigation {
            width: 16%;
            flex-grow: 0;
            flex-shrink: 0;
        }

        .tabs {
            margin-right: 18px;
            height: 30%;
            min-height: 320px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
        }

        .verticalLine {
            border-right: 2px solid #ffffff;
        }

        .rotate {
            transform: rotate(270deg);
        }

        .tab {
            text-align: center;
            font-size: 18px;
            font-family: NarkisBlockCondensedMF, serif;
            letter-spacing: 0;
            color: #000000;
            opacity: 1;
            width: 68px;
            cursor: pointer;
        }
    `]
})
export class AppComponent implements OnInit {
    routeLinks: any[];
    activeLinkIndex = -1;

    constructor(private router: Router) {
        this.routeLinks = [
            {
                label: 'home',
                link: './home',
                index: 0
            },
            {
                label: '2020',
                link: './final-project',
                index: 1
            }, {
                label: '2019',
                link: './portfolio',
                index: 2
            }, {
                label: '2018',
                link: './contactDetails',
                index: 3
            }
        ];
    }

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
}
