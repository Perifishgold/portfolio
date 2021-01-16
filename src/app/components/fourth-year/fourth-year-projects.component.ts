import {Component, OnInit} from '@angular/core';
import * as projectsJson from '../../../assets/strings/fourth-year-projects.json';

@Component({
    selector: 'app-fourth-year-projects',
    template: `
        <app-project-selection-view
                [projects]="this.projects">
        </app-project-selection-view>
    `,
    styles: []
})
export class FourthYearProjectsComponent implements OnInit {
    public projects

    constructor() {
        this.projects = projectsJson.projects.map((project) => project["project-selection-view"]);
    }

    ngOnInit(): void {
    }

}
