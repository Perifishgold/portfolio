import {Component, OnInit} from '@angular/core';
import {animate, style, state, transition, trigger} from "@angular/animations";
import {ImageService, ProjectImage} from "../../services/image.service";


@Component({
    selector: 'app-image-slider',
    template: `
        <div dir="ltr" class="sliderContainer">
            <div class="imagesCropper">
                <div class="imageCarousel">
                    <ng-container *ngFor="let projectImage of this.images; let i = index">
                        <div class="selectableImageContainer"
                             (click)="selectImage(projectImage)"
                             [ngClass]="{'selected': imageService.selectedImage===projectImage}"
                             [@move]="state"
                             (@move.done)="onFinish($event)">
                            <img [attr.class]="i"
                                 [src]="projectImage.url"
                                 alt=""/>
                        </div>
                    </ng-container>
                </div>
            </div>
            <div class="arrows">
                <a class="slider-buttons circularButton slideLeft" (click)="moveLeft()">&lsaquo;</a>
                <a class="slider-buttons circularButton slideRight" (click)="moveRight()">&rsaquo;</a>
            </div>
        </div>

    `,
    styles: [`
        .sliderContainer {
            position: relative;
        }

        .imagesCropper {
            overflow: hidden;
        }

        .imageCarousel {
            width: 1800px;
            display: flex;
            align-items: center;
        }

        img {
            max-width: 100%;
            max-height: 100%;
        }

        .selectableImageContainer {
            cursor: pointer;
            margin: 0 0.5%;
            opacity: 50%;
            z-index: 1;
            /*height: 45%;*/
            /*border: 2px solid rgba(252, 252, 252, 0.2);*/
            /*border-radius: 4px;*/
        }

        .selectableImageContainer:hover {
            /*box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);*/
            opacity: 100%;
        }

        .selected {
            /*border: 2px solid rgba(0, 140, 186, 0.5);*/
            opacity: 100%;
        }

        .arrows {
            position: absolute;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            top: 0;
            align-items: center;
        }

        .slider-buttons {
            z-index: 1000;
            cursor: pointer;
            font-size: 577%;
            color: #726868;
            user-select: none;
        }

        .circularButton {
            background-color: rgba(252, 252, 252, 0.3);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 27px;
        }

        .circularButton:hover {
            background-color: rgba(252, 252, 252, 0.8);
        }

        .slideRight {
            float: right;
            right: 0;
        }

        .slideLeft {
            float: left;
            left: 0;
        }

    `],
    animations: [
        trigger('move', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => left', [
                style({transform: 'translateX(100%)'}),
                animate(200)
            ]),
            transition('left => void', [
                animate(200, style({transform: 'translateX(0)'}))
            ]),
            transition('void => right', [
                style({transform: 'translateX(-100%)'}),
                animate(200)
            ]),
            transition('right => void', [
                animate(200, style({transform: 'translateX(0)'}))
            ])
        ])
    ]
})
export class ImageSliderComponent implements OnInit {

    public state = 'void';

    public images: ProjectImage[];

    constructor(public imageService: ImageService) {
        this.images = [...this.imageService.images];
    }

    ngOnInit() {
    }

    imageRotate(arr, reverse) {
        if (reverse) {
            arr.unshift(arr.pop());
        } else {
            arr.push(arr.shift());
        }
        return arr;
    }

    moveRight() {
        this.state = 'right';
        this.imageRotate(this.images, true);
    }

    moveLeft() {
        this.state = 'left';
        this.imageRotate(this.images, false);
    }

    onFinish($event) {
        this.state = 'void';
    }

    selectImage(projectImage: ProjectImage) {
        this.imageService.select(projectImage);
    }
}
