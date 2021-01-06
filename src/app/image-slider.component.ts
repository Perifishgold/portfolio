import {Component, Input, OnInit} from '@angular/core';
import {animate, style, state, transition, trigger} from "@angular/animations";
import {ImageService, ProjectImage} from "./image.service";


@Component({
    selector: 'app-image-slider',
    template: `
        <div dir="ltr" class="sliderContainer">
            <a class="slider-buttons " (click)="moveRight()">&lsaquo;</a>
            <div class="imageCropper selectableSlider">
                <ng-container *ngFor="let projectImage of this.images; let i = index">
                    <div class="selectableImageContainer"
                         (click)="selectImage(projectImage)">
                        <img [ngClass]="{'selected': imageService.selectedImage===projectImage}"
                             [@move]="state"
                             (@move.done)="onFinish($event)"
                             (@move.start)="onStart($event)"
                             [attr.class]="i"
                             [src]="projectImage.url"
                             alt=""/>
                    </div>

                </ng-container>
            </div>
            <a class="slider-buttons" (click)="moveLeft()">&rsaquo;</a>
        </div>
    `,
    styles: [`
        .sliderContainer {
            position: relative;
            height: 100%;
        }

        .slider-buttons {
            z-index: 1000;
            cursor: pointer;
            font-size: 250%;
            color: #726868;
            user-select: none;
        }

        .slideRight {
            float: right;
            right: 0;
        }

        .slideLeft {
            float: left;
            left: 0;
        }

        .imageCropper {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;
        }

        .selectableSlider {
            height: 250px;
            flex-wrap: wrap;
        }

        img {
            max-width: 100%;
            max-height: 100%;
            border: 2px solid rgba(252, 252, 252, 0.2);
            border-radius: 4px;
        }

        img:hover {
            box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
        }

        .selectableImageContainer {
            cursor: pointer;
            height: 45%;
            padding: 5px;
        }

        .selected {
            border: 2px solid rgba(0, 140, 186, 0.5);
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
    public disableSliderButtons = false;

    public images: ProjectImage[];

    constructor(public imageService: ImageService) {
    }

    ngOnInit() {
        this.images = [...this.imageService.images];
    }

    imageRotate(arr, reverse) {
        if (reverse) {
            arr.unshift(arr.pop());
        } else {
            arr.push(arr.shift());
        }
        return arr;
    }

    moveLeft() {
        if (this.disableSliderButtons) {
            return;
        }
        this.state = 'right';
        this.imageRotate(this.images, true);
    }

    moveRight() {
        if (this.disableSliderButtons) {
            return;
        }
        this.state = 'left';
        this.imageRotate(this.images, false);
    }

    onFinish($event) {
        this.state = 'void';
        this.disableSliderButtons = false;
    }

    onStart($event) {
        this.disableSliderButtons = true;
    }

    selectImage(projectImage: ProjectImage) {
        this.imageService.selectedImage = projectImage
    }
}
