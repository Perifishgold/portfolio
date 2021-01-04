import {Component, Input, OnInit} from '@angular/core';
import {animate, style, state, transition, trigger} from "@angular/animations";
import {ImageService, ProjectImage} from "./image.service";


type SliderType = 'selectableSlider' | 'singleImageSlider';

@Component({
    selector: 'app-image-slider',
    template: `
        <div dir="ltr" class="sliderContainer">
            <a class="slider-buttons" (click)="moveRight()">&lsaquo;</a>
            <div class="imageCropper" [ngClass]="getImageCropper()">
                <ng-container *ngFor="let projectImage of this.images; let i = index">
                    <img (click)="selectImage(projectImage)"
                         [ngClass]=
                                 "{'selected': imageService.selectedImage===projectImage, 
                                   'selectableImage': sliderType==='selectableSlider',
                                   'coverImage': sliderType==='singleImageSlider' }"
                         [@move]="state"
                         (@move.done)="onFinish($event)"
                         (@move.start)="onStart($event)"
                         [attr.class]="i"
                         [src]="projectImage.url"
                         alt=""/>
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

        .singleImageSlider {
            max-width: 100%;
            max-height: 100%
        }

        img {
            padding: 5px;
        }

        .selectableImage {
            cursor: pointer;
            max-height: 45%;
        }

        .coverImage{
            max-width: 100%;
        }

        .selected {
            border: 1px solid red;
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

    @Input() sliderType: SliderType;

    public state = 'void';
    public disableSliderButtons = false;

    public images: ProjectImage[];

    constructor(public imageService: ImageService) {
        this.images = [...imageService.images];
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

    getImageCropper() {
        return this.sliderType;
    }

    selectImage(projectImage: ProjectImage) {
        this.imageService.selectedImage = projectImage
    }
}
