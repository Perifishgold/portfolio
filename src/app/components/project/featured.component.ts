import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../services/image.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-featured',
    template: `
        <div dir="ltr" class="featuredImageContainer">
            <img class="featuredImage" @carouselAnimation [src]="imageService.featuredImage.url" alt=""/>
            <p dir="rtl">lalalalalalalalalalalalalalala</p>
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
            align-items: center;
            position: relative;
        }

        .featuredImage {
            max-height: 100%;
            max-width: 100%;
            transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
            position: absolute;
        }

        .featuredImage:hover {
            transform: scale(1.025);
        }

        .slider-buttons {
            position: absolute;

            z-index: 1000;
            cursor: pointer;
            font-size: 250%;
            color: rgba(252, 252, 252, 0);
            user-select: none;
        }

        .slider-buttons:hover {
            color: rgba(252, 252, 252, 1);
        }

        .slideRight {
            float: right;
            right: 0;
        }

        .slideLeft {
            float: left;
            left: 0;
        }

        p {
            bottom: 0;
            position: absolute;
        }
    `],
    animations: [
        trigger('carouselAnimation', [
            transition('void => *', [
                style({opacity: 0}),
                animate('300ms', style({opacity: 1}))
            ]),
            transition('* => void', [
                animate('300ms', style({opacity: 0}))
            ])
        ])
    ]
})
export class FeaturedComponent implements OnInit {

    constructor(public imageService: ImageService) {
    }

    ngOnInit(): void {
    }


}
