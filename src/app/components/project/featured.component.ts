import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../services/image.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-featured',
    template: `
        <div dir="ltr" class="featuredImageContainer">
            <img class="featuredImage"
                 [@carouselAnimation]="this.state"
                 (@carouselAnimation.done)="onFinish($event)"
                 [src]="imageService.featuredImage.url"
                 alt=""/>
            <p dir="rtl">lalalalalalalalalalalalalalala</p>
            <div class="arrows">
                <a class="slider-buttons slideRight" (click)="this.changeFeature(1)">&rsaquo;</a>
                <a class="slider-buttons slideLeft" (click)="this.changeFeature(-1)">&lsaquo;</a>
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
            color: rgba(252, 252, 252, 0.5);
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
            state('in', style({'opacity': '1'})),
            state('out', style({'opacity': '0'})),
            transition('* <=> *', [
                animate(300)
            ])
        ])
    ]
})
export class FeaturedComponent implements OnInit {
    public state = 'in';
    moveDirection: number;

    constructor(public imageService: ImageService) {
    }

    changeFeature(direction: number): void {
        this.moveDirection = direction;
        this.toggleState();
    }

    private changeImage() {
        if (this.moveDirection === 1) {
            this.imageService.getNextFeatured();
        } else if (this.moveDirection === -1) {
            this.imageService.getPreviousFeared();
        }
    }

    onFinish($event) {
        if (this.state === 'out') {
            this.changeImage();
            this.state = 'in';
        }
    }

    toggleState() {
        this.state = this.state === 'in' ? 'out' : 'in';
    }

    ngOnInit(): void {
    }


}
