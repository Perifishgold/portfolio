import {Component, OnInit} from '@angular/core';
import {ImageService} from "./image.service";

@Component({
    selector: 'app-final-project',
    template: `
        <app-portfolio-project></app-portfolio-project>
    `,
    styles: [],
    providers: [ImageService]
})
export class FinalProjectComponent implements OnInit {

    constructor(private imageService: ImageService) {
        imageService.projectImages = ['assets/img/testImages/1.jpg', 'assets/img/testImages/2.jpg', 'assets/img/testImages/3.jpg', 'assets/img/testImages/4.jpg', 'assets/img/testImages/5.jpg', 'assets/img/testImages/6.jpg', 'assets/img/testImages/7.jpg', 'assets/img/testImages/8.jpg', 'assets/img/testImages/9.jpg'];
    }

    ngOnInit(): void {
    }

}
