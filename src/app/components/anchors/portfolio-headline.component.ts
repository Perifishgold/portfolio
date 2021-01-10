import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-portfolio-headline',
    template: `
        <div class="headline">
            <div *ngIf="!this.minimized"
                 class="secondaryHeadline textLeft">
                Yana Hitrov
            </div>
            <div class="primaryHeadline"
                 [ngClass]="{'primaryHeadlineMinimized':this.minimized}">
                PoRtFoLio
            </div>
            <div class="secondaryHeadline textRight lowerHeadline"
                 [ngClass]="{'secondaryHeadlineMinimized':this.minimized}">
                תיק עבודות
            </div>
        </div>
    `,
    styles: [`
        .headline {
            display: inline-block;
            user-select: none;
        }

        .textRight {
            text-align: right;
        }

        .textLeft {
            text-align: left;
        }

        .primaryHeadline {
            text-align: center;
            font-size: 2rem;
            line-height: 2rem;
            font-family: Agency FB, serif;
            letter-spacing: 0;
            color: #000000;
            opacity: 1;
            margin: 0
        }

        .primaryHeadlineMinimized {
            font-size: 1.1rem;
            line-height: 1.3rem;
        }

        .secondaryHeadline {
            font-size: 0.6rem;
            line-height: 0.8rem;
            font-family: Lupa Pinky, serif;
            letter-spacing: -0.25px;
            color: #C55858;
            opacity: 1;
            margin: 0
        }

        .secondaryHeadlineMinimized {
            font-size: 0.5rem;
            color: #000000;
        }

        .lowerHeadline {
            line-height: 8px;
        }

        @font-face {
            font-family: Agency FB;
            src: url(../../../assets/font/AGENCYR.TTF) format("truetype");
        }

        @font-face {
            font-family: Lupa Pinky;
            src: url('../../../assets/font/BN Pinky.ttf') format("truetype");
        }
    `]
})
export class PortfolioHeadlineComponent implements OnInit {
    @Input() minimized: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
