import {Component, OnInit} from '@angular/core';
import {ImageService} from "../services/image.service";

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
        imageService.projectImages = ['assets/img/finalProject/1.png', 'assets/img/finalProject/2.png', 'assets/img/finalProject/3.png', 'assets/img/finalProject/4.png', 'assets/img/finalProject/5.png', 'assets/img/finalProject/6.png', 'assets/img/finalProject/7.png', 'assets/img/finalProject/8.png'];
        imageService.coverImage = 'assets/img/finalProject/1.png';
    }

    ngOnInit(): void {
    }

}
