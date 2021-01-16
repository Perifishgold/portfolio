import {Component, OnInit} from '@angular/core';
import * as projectsJson from "../../../assets/strings/second-year-projects.json";

@Component({
    selector: 'app-second-year-projects',
    template: `
        <app-project-selection-view
                [projects]="this.projects">
        </app-project-selection-view>
    `,
    styles: []
})
export class SecondYearProjectsComponent implements OnInit {
    public projects

    constructor() {
        this.projects = projectsJson.projects.map((project) => project["project-selection-view"]);
    }

    ngOnInit(): void {
    }

}
