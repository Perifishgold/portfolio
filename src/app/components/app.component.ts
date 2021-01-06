import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <div class="projectsNavigation">
                <nav mat-tab-nav-bar>
                    <a mat-tab-link
                       *ngFor="let link of routeLinks"
                       [routerLink]="link.link"
                       routerLinkActive #rla="routerLinkActive"
                       [active]="rla.isActive">{{link.label}}
                    </a>
                </nav>
                <router-outlet></router-outlet>
            </div>
            <div class="generalNavigation">
                <div class="tabs verticalLine">
                    <h3 class="tab rotate">קורות חיים</h3>
                    <h3 class="tab rotate">ART</h3>
                    <h3 class="tab rotate">צור קשר</h3>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .container {
            background: url("../../assets/img/background.jpeg") no-repeat;
            background-size: cover;
            height: 100%;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .projectsNavigation {
            padding-top: 5%;
            flex-grow: 1;
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
        }
        
        @font-face {
            font-family: Agency FB;
            src: url(../../assets/font/AGENCYR.TTF) format("truetype");
        }

        @font-face {
            font-family: Lupa Pinky;
            src: url('../../assets/font/BN Pinky.ttf') format("truetype");
        }
    `]
})
export class AppComponent implements OnInit {
    routeLinks: any[];
    activeLinkIndex = -1;

    constructor(private router: Router) {
        this.routeLinks = [
            {
                label: '2020',
                link: './final-project',
                index: 0
            }, {
                label: '2019',
                link: './portfolio',
                index: 1
            }, {
                label: '2018',
                link: './contactDetails',
                index: 2
            }
        ];
    }

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
}
