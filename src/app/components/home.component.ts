import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div class="homeContainer">
            <div class="headline">
                <h4 class="secondaryHeadline textLeft">Yana Hitrov</h4>
                <h1 class="primaryHeadline">PoRtFoLio</h1>
                <h4 class="secondaryHeadline textRight lowerHeadline">תיק עבודות</h4>
            </div>
        </div>
    `,
    styles: [`
        .homeContainer {
            position: relative;
            height: 100%;
        }

        .headline {
            display: inline-block;
            position: absolute;
            top: 33%;
            left: 3%;
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

        .secondaryHeadline {
            font-size: 20px;
            line-height: 20px;
            font-family: Lupa Pinky, serif;
            letter-spacing: -0.25px;
            color: #C55858;
            opacity: 1;
            margin: 0
        }

        .lowerHeadline {
            line-height: 8px;
        }

        .generalNavigation {
            grid-area: navigation;
            position: relative;
        }

        .tabs {
            margin-right: 18px;
            position: absolute;
            top: 21%;
            height: 30%;
            min-height: 245px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
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
            line-height: 12px;
            font-family: NarkisBlockCondensedMF, serif;
            letter-spacing: 0;
            color: #000000;
            opacity: 1;

            cursor: pointer;
        }

    `]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
