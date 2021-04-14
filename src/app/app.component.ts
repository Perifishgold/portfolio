import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-portfolio-main></app-portfolio-main>
    `,
    styles: [`
        @font-face {
            font-family: AgencyFB;
            src: url('../assets/font/AGENCYR.TTF') format("truetype");
        }

        @font-face {
            font-family: LupaPinky;
            src: url('../assets/font/BN Pinky.ttf') format("truetype");
        }
    `]
})
export class AppComponent {}
