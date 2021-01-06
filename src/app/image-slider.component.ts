import {Component, OnInit} from '@angular/core';
import {animate, style, state, transition, trigger} from "@angular/animations";
import {ImageService, ProjectImage} from "./image.service";


@Component({
    selector: 'app-image-slider',
    template: `
        <div dir="ltr" class="imageCropper selectableSlider sliderContainer">
            <ng-container *ngFor="let projectImage of this.images; let i = index">
                <div class="selectableImageContainer"
                     (click)="selectImage(projectImage)"
                     [ngClass]="{'selected': imageService.selectedImage===projectImage}">
                    <img [@move]="state"
                         (@move.done)="onFinish($event)"
                         (@move.start)="onStart($event)"
                         [attr.class]="i"
                         [src]="projectImage.url"
                         alt=""/>
                </div>
            </ng-container>
            <div class="arrows">
                <a class="slider-buttons slideRight" (click)="moveRight()">&rsaquo;</a>
                <a class="slider-buttons slideLeft" (click)="moveLeft()">&lsaquo;</a>
            </div>
        </div>
    `,
    styles: [`
        .sliderContainer {
            position: relative;
            height: 100%;
        }
        
        .arrows{
            height: 100%;
        }

        .slider-buttons {
            position: absolute;
            
            z-index: 1000;
            cursor: pointer;
            font-size: 250%;
            color: #726868;
            user-select: none;

            background-color: rgba(252, 252, 252, 0.3);
            border-radius: 50%;
            width: 26px;
            height: 27px;
            display: block;
            text-align: center;
        }
        
        .slider-buttons:hover{
            background-color: rgba(252, 252, 252, 0.8);
        }

        .slideRight{
            top: 68%;
            float: right;
            right: 0;
        }

        .slideLeft {
            top: 19%;
            float: left;
            left: 0;
        }
        
        .imageCropper {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
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
        }

        .selectableImageContainer {
            cursor: pointer;
            height: 45%;
            margin: 5px;
            border: 2px solid rgba(252, 252, 252, 0.2);
            border-radius: 4px;
        }

        .selectableImageContainer:hover {
            box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
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

    moveRight() {
        if (this.disableSliderButtons) {
            return;
        }
        this.state = 'right';
        this.imageRotate(this.images, true);
    }

    moveLeft() {
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
        this.imageService.select(projectImage);
    }
}
