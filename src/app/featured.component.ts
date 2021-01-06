import {Component, OnInit} from '@angular/core';
import {ImageService} from "./image.service";

@Component({
    selector: 'app-featured',
    template: `
        <div class="featuredImageContainer">
            <img class="featuredImage" [src]="imageService.featuredImage.url" alt=""/>
        </div>
    `,
    styles: [`
        .featuredImageContainer {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .featuredImage {
            max-width: 100%;
            max-height: 100%;
        }
    `]
})
export class FeaturedComponent implements OnInit {

    constructor(public imageService: ImageService) {
    }

    ngOnInit(): void {
    }

}
