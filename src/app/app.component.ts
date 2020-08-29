import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <div class="header">
                <h1 class="headline">יאנה חיטרוב</h1>
            </div>
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
            height: 100%;
            padding-right: 2%;
            padding-left: 2%;
        }

        .header {
            background-image: url("../assets/img/website-background-pattern.jpg");
            grid-area: header;
            margin-top: 14px;
            height: 30%;
            position: relative;
        }

        .headline {
            position: absolute;
            bottom: 0;
        }

        .navigation {
            grid-area: navigation;
        }

        .content {
            grid-area: content;
            background-color: #ffc10700;
        }


    `]
})
export class AppComponent implements OnInit {
    routeLinks: any[];
    activeLinkIndex = -1;

    constructor(private router: Router) {
        this.routeLinks = [
            {
                label: 'קורות חיים',
                link: './about',
                index: 0
            }, {
                label: 'תיק עבודות',
                link: './portfolio',
                index: 1
            }, {
                label: 'צור קשר',
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
