import {Component, OnInit} from '@angular/core';
import {ImageService} from "../services/image.service";

@Component({
    selector: 'app-final-project',
    template: `
        <app-portfolio-project></app-portfolio-project>
    `,
    styles: [`
        :host {
            flex: 1;
        }
    `],
    providers: [ImageService]
})
export class FinalProjectComponent implements OnInit {

    constructor(private imageService: ImageService) {
        imageService.projectImages = [
            'assets/img/finalProject/cover.png',
            'assets/img/finalProject/1.png',
            'assets/img/finalProject/2.png',
            'assets/img/finalProject/3.png',
            'assets/img/finalProject/4.png',
            'assets/img/finalProject/5.png',
            'assets/img/finalProject/6.png',
            'assets/img/finalProject/7.png',
            'assets/img/finalProject/8.png',
            'assets/img/finalProject/9.png',
            'assets/img/finalProject/10.png',
            'assets/img/finalProject/11.png',
            'assets/img/finalProject/12.png',
            'assets/img/finalProject/13.png',
            'assets/img/finalProject/14.png',
            'assets/img/finalProject/15.png',
            'assets/img/finalProject/16.png',
            'assets/img/finalProject/17.png',
            'assets/img/finalProject/18.png'
        ];
        imageService.coverImage = 'assets/img/finalProject/cover.png';
    }

    ngOnInit(): void {
    }

}
