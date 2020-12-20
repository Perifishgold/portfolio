import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div class="homeContainer">
            <div class="navigation">
                <div class="tabs verticalLine">
                    <h3 class="tab rotate">קורות חיים</h3>
                    <h3 class="tab rotate">ART</h3>
                    <h3 class="tab rotate">צור קשר</h3>
                </div>
            </div>
            <div class="content">
                <div class="headline">
                    <h4 class="secondaryHeadline textLeft">Yana Hitrov</h4>
                    <h1 class="primaryHeadline">PoRtFoLio</h1>
                    <h4 class="secondaryHeadline textRight">תיק עבודות</h4>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .homeContainer {
            display: grid;
            grid-template-columns: 3fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "content navigation";
            height: 100%;
        }

        .content {
            grid-area: content;
            position: relative;
        }

        .headline {
            display: inline-block;
            position: absolute;
            top: 30%;
            left: 4%;
        }

        .textRight {
            text-align: right;
        }

        .textLeft {
            text-align: left;
        }

        .primaryHeadline {
            text-align: center;
            font-size: 3rem;
            line-height: 1rem;
            font-family: Agency FB, serif;
            letter-spacing: 0;
            color: #000000;
            opacity: 1;
        }

        .secondaryHeadline {
            font-size: 20px;
            line-height: 1.3rem;
            font-family: Lupa Pinky, serif;
            letter-spacing: -0.25px;
            color: #C55858;
            opacity: 1;
        }

        .navigation {
            grid-area: navigation;
            position: relative;
        }

        .tabs {
            margin-right: 18px;
            position: absolute;
            top: 20%;
            height: 30%;
            min-height:245px ;
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


        @font-face {
            font-family: Agency FB;
            src: url(../assets/font/AGENCYR.TTF) format("truetype");
        }

        @font-face {
            font-family: Lupa Pinky;
            src: url('../assets/font/BN Pinky.ttf') format("truetype");
        }

    `]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
