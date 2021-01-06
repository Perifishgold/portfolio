import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-portfolio-project',
    template: `
        <div class="projectGrid">
            <div class="cover">
                <div class="coverImage">
                    <app-featured></app-featured>
                </div>
            </div>
            <div class="description"></div>
            <div class="images">
                <app-image-slider></app-image-slider>
            </div>
        </div>
    `,
    styles: [`
        .projectGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(250px, 1fr));
            grid-template-rows: 2fr 1fr;
            grid-column-gap: 3%;
            grid-row-gap: 3%;
            grid-template-areas: "cover description" "cover images";
            height: 75%;
            margin: 0 10%;
            align-content: center;
        }


        .cover {
            grid-area: cover;
        }

        .coverImage {
            height: 100%;
            background-color: rgba(91, 84, 84, 0.38);
        }

        .description {
            grid-area: description;
        }

        .images {
            grid-area: images;
        }

    `]
})
export class PortfolioProjectComponent implements OnInit {

    @Input() projectImagesPath;


    constructor() {
    }

    ngOnInit() {
    }

}
