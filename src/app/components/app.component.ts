import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
        <div class="portfolioFlexContainer">
            <div class="content">
                <app-portfolio-header class="projectsNavigation"></app-portfolio-header>
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
            background: url("../../assets/img/background2.jpg") no-repeat;
            background-size: cover;
            height: 100%;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .content {
            flex-grow: 1;
        }

        .projectsNavigation {
            padding-top: 5%;
            height: 100%;
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
            user-select: none;
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
