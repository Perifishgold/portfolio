import {Component, OnInit} from '@angular/core';
import * as projectsJson from "../../../assets/strings/third-year-projects.json";

@Component({
    selector: 'app-third-year-projects',
    template: `
        <app-project-selection-view
                [projects]="this.projects">
        </app-project-selection-view>
    `,
    styles: []
})
export class ThirdYearProjectsComponent implements OnInit {

    public projects

    constructor() {
        this.projects = projectsJson.projects.map((project) => project["project-selection-view"]);
    }

    ngOnInit(): void {
    }

}
