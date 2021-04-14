import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div class="homeContainer">
            <app-portfolio-logo class="headline"></app-portfolio-logo>
        </div>
    `,
    styles: [`
        :host {
            flex: 1;
        }
        
        .homeContainer {
            position: relative;
            height: 100%;
        }

        .headline {
            display: inline-block;
            position: absolute;
            top: 38%;
            left: 3%;
        }
    `]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
