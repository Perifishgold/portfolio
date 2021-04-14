import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-portfolio-main',
    template: `
        <div class="portfolioFlexContainer">
            <div class="mainContent">
                <app-portfolio-header class="projectsNavigation"></app-portfolio-header>
                <router-outlet></router-outlet>
            </div>
            <div class="generalNavigation">
                <a class="homePageLink" *ngIf="!isHomePage()" routerLink="/home" routerLinkActive="active">
                    <app-portfolio-headline
                            appZoomIn
                            [minimized]="true"
                            class="homePage">
                    </app-portfolio-headline>
                </a>
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
            background: url("../../assets/img/background2.jpg") no-repeat;
            background-size: cover;
            height: 100%;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .mainContent {
            height: 100%;
            flex-grow: 1;
            margin-right: 10%;
            margin-top: 3%;
            display: flex;
            flex-direction: column;
        }

        .homePageLink {
            position: absolute;
            top: 3%;
        }

        .homePage {
            position: absolute;
            cursor: pointer;
            user-select: none;
        }

        .projectsNavigation {
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
            font-family: Lupa Pinky, serif;
            letter-spacing: 2px;
            color: #000000;
            opacity: 1;
            width: 68px;
            cursor: pointer;
            user-select: none;
        }
    `]
})
export class PortfolioMainComponent {
    constructor(private router: Router) {
    }

    isHomePage() {
        return this.router.url === '/home'
    }

}
