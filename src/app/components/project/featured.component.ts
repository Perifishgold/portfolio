import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ImageService} from "../../services/image.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-featured',
    template: `
        <div dir="ltr" #featuredImageContainer
             class="featuredImageContainer"
             [ngClass]="{fullScreen:isFullScreen}">
            <img class="featuredImage"
                 (click)="openInFullScreen()"
                 [@carouselAnimation]="this.state"
                 (@carouselAnimation.done)="onFinish($event)"
                 [src]="imageService.featuredImage.url"
                 alt=""/>
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

        .fullScreen {
            background-color: rgb(255, 255, 255, 0.6);
            position: absolute;
            height: 100vh;
            width: 100vw;
            z-index: 1000000;
            top: 0;
            left: 0;
        }

        .featuredImage {
            max-height: 100%;
            max-width: 100%;
            transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
            position: absolute;
            cursor: pointer;
        }

        .featuredImage:hover {
            transform: scale(1.025);
        }

        .fullScreen .featuredImage {
            cursor: auto;
            transition: none;
        }

        .fullScreen .featuredImage:hover {
            transform: none;
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

        .fullScreen .slider-buttons {
            font-size: 500%;
        }

        p {
            bottom: 0;
            position: absolute;
        }
    `],
    animations: [
        trigger('carouselAnimation', [
            transition('in => right', [
                animate(
                    "200ms cubic-bezier(0.785, 0.135, 0.15, 0.86)",
                    style({opacity: 0, transform: 'translateX(10%)'})
                )
            ]),
            transition('right => in', [
                style({opacity: 0, transform: 'translateX(-10%)'}),
                animate(
                    "200ms cubic-bezier(0.785, 0.135, 0.15, 0.86)",
                    style({opacity: 1, transform: 'translateX(0)'})
                )
            ]),
            transition('in => left', [
                animate(
                    "200ms cubic-bezier(0.785, 0.135, 0.15, 0.86)",
                    style({opacity: 0, transform: 'translateX(-10%)'})
                )
            ]),
            transition('left => in', [
                style({opacity: 0, transform: 'translateX(10%)'}),
                animate(
                    "200ms cubic-bezier(0.785, 0.135, 0.15, 0.86)",
                    style({opacity: 1, transform: 'translateX(0)'})
                )
            ])
        ])
    ]
})
export class FeaturedComponent implements AfterViewInit {
    public state = 'in';
    moveDirection: number;
    isFullScreen = false;

    @ViewChild('featuredImageContainer') featuredImageContainerViewChilled;
    featuredImageContainer: ElementRef;

    constructor(public imageService: ImageService) {
    }

    changeFeature(direction: number): void {
        this.moveDirection = direction;
        if (direction === 1) {
            this.state = 'right';
        } else if (direction === -1) {
            this.state = 'left';
        }

    }

    private changeImage() {
        if (this.moveDirection === 1) {
            this.imageService.getNextFeatured();
        } else if (this.moveDirection === -1) {
            this.imageService.getPreviousFeared();
        }
    }

    onFinish($event) {
        if (this.state !== 'in') {
            this.changeImage();
            this.state = 'in';
        }
    }

    openInFullScreen() {
        this.isFullScreen = true;
    }

    @HostListener('document:keydown.escape')
    exitFullScreen() {
        this.isFullScreen = false;
    }

    ngAfterViewInit(): void {
        this.featuredImageContainer = this.featuredImageContainerViewChilled.nativeElement;
    }
}
