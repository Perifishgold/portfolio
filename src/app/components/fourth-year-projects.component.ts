import {Component, OnInit} from '@angular/core';
import * as projectsJson from '../../assets/strings/fourth-year-projects.json';

@Component({
    selector: 'app-fourth-year-projects',
    template: `
        <app-project-selection-view
                [projects]="this.fourthYearProjects">
        </app-project-selection-view>
    `,
    styles: [`
        :host {
            flex: 1;
        }
    `]
})
export class FourthYearProjectsComponent implements OnInit {
    public fourthYearProjects

    constructor() {
        this.fourthYearProjects = projectsJson.projects.map((project) => project["project-selection-view"]);
    }

    ngOnInit(): void {
    }

}
