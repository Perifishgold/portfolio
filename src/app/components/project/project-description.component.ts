import {Component, Input, OnInit} from '@angular/core';
import {ProjectDataProviderService} from "../../services/project-data-provider.service";

@Component({
    selector: 'app-project-description',
    template: `
        <div class="descriptionContainer">
            <h1>{{this.projectDataProviderService.projectDescription["headline"]}}</h1>
            <span>{{this.projectDataProviderService.projectDescription["headline-note"]}}</span>
            <h2>{{this.projectDataProviderService.projectDescription["secondary-headline"]}}</h2>
            <p>{{this.projectDataProviderService.projectDescription["full-description"]}}</p>
        </div>
    `,
    styles: [`
        .descriptionContainer {
            width: 65%;
            overflow: scroll;
            max-height: 80%;
            position: absolute;
            bottom: 0;
        }

        ::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }

        h1 {
            margin-top: 2%;
            display: inline-block;
            text-align: right;
            font-size: 55px;
            line-height: 25px;
            font-family: LupaPinky, serif;
            letter-spacing: 0;
            color: #B35656;
            opacity: 1;
        }

        span {
            text-align: right;
            font-size: 18px;
            line-height: 25px;
            font-family: LupaPinky, serif;
            letter-spacing: 0;
            color: #000000;
            opacity: 1;
        }

        h2 {
            text-align: right;
            font-size: 22px;
            line-height: 25px;
            font-family: LupaPinky, serif;
            letter-spacing: 0;
            color: #FFFFFF;
            opacity: 1;
        }

        p {
            text-align: right;
            font-size: 24px;
            line-height: 25px;
            font-family: LupaPinky, serif;
            letter-spacing: 0.6px;
            color: #000000;
            opacity: 1;
        }
    `]
})
export class ProjectDescriptionComponent implements OnInit {

    constructor(public projectDataProviderService: ProjectDataProviderService) {
    }

    ngOnInit(): void {
    }

}
