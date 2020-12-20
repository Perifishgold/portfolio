import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <div class="navigation">
                <nav mat-tab-nav-bar>
                    <a mat-tab-link
                       *ngFor="let link of routeLinks"
                       [routerLink]="link.link"
                       routerLinkActive #rla="routerLinkActive"
                       [active]="rla.isActive">{{link.label}}
                    </a>
                </nav>
            </div>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .container {
            background: url("../assets/img/background.jpeg");
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;
        }

        .navigation {
            padding-top: 5%
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
