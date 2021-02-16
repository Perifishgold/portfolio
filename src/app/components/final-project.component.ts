import {Component, OnInit} from '@angular/core';
import {ProjectDataProviderService} from "../services/project-data-provider.service";
import * as finalProjectJson from "../../assets/strings/final-project.json";

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
    providers: [ProjectDataProviderService]
})
export class FinalProjectComponent implements OnInit {
    constructor(private projectDataProviderService: ProjectDataProviderService) {
        projectDataProviderService.projectImages = finalProjectJson.projectImages;
        projectDataProviderService.coverImage = finalProjectJson.coverImage;
        projectDataProviderService.projectDescription = finalProjectJson.projectDescription;
    }

    ngOnInit(): void {
    }

}
