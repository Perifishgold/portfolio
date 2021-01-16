import {Component, OnInit} from '@angular/core';
import * as projectsJson from "../../../assets/strings/first-year-projects.json";

@Component({
    selector: 'app-first-year-projects',
    template: `
        <app-project-selection-view
                [projects]="this.projects">
        </app-project-selection-view>
    `,
    styles: []
})
export class FirstYearProjectsComponent implements OnInit {
    public projects

    constructor() {
        this.projects = projectsJson.projects.map((project) => project["project-selection-view"]);
    }

    ngOnInit(): void {
    }

}
