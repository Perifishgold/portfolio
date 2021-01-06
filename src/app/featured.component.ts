import {Component, OnInit} from '@angular/core';
import {ImageService} from "./image.service";

@Component({
    selector: 'app-featured',
    template: `
        <div dir="ltr" class="featuredImageContainer">
            <img class="featuredImage" [src]="imageService.featuredImage.url" alt=""/>
            <div class="arrows">
                <a class="slider-buttons slideRight" (click)="imageService.getNextFeatured()">&rsaquo;</a>
                <a class="slider-buttons slideLeft" (click)="imageService.getPreviousFeared()">&lsaquo;</a>
            </div>
        </div>
    `,
    styles: [`
        .featuredImageContainer {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            position: relative;
        }
        
        .featuredImage {
            max-height: 100%;
            object-fit: contain
        }

        .slider-buttons {
            position: absolute;

            z-index: 1000;
            cursor: pointer;
            font-size: 250%;
            color: rgb(252, 252, 252);
            user-select: none;
        }

        .slideRight {
            top: 49%;
            float: right;
            right: 0;
        }

        .slideLeft {
            top: 49%;
            float: left;
            left: 0;
        }
    `]
})
export class FeaturedComponent implements OnInit {

    constructor(public imageService: ImageService) {
    }

    ngOnInit(): void {
    }


}
