import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-project-selection-view',
    template: `
        <div class="projectsSelectionContainer">
            <ng-container *ngFor="let project of this.projects">
                <div class="square selectable-project">
                    <div class="content">
                        <div class="primary-headline">{{project["primary-headline"]}}</div>
                        <div class="secondary-headline">{{project["secondary-headline"]}}</div>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
    styles: [`
        :host {
            height: 100%;
            display: flex;
            align-items: center;
        }

        .projectsSelectionContainer {
            display: flex;
            width: 50%;
            height: 50%;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin: auto;
        }

        .square {
            float: left;
            position: relative;
            width: 35%;
            padding-bottom: 30%;
            margin: 1.66%;
            background-color: rgba(0, 0, 0, 0.19);
            overflow: hidden;
        }

        .selectable-project {
            cursor: pointer;
        }

        .content {
            position: absolute;
            height: 90%; 
            width: 90%;
            padding: 5%;
            display:flex;
            flex-direction: column;
            justify-content: center;
        }

        .primary-headline {
            text-align: center;
            font-size: 1.5em;
            line-height: 2em;
            font-family: Lupa Pinky, serif;
            letter-spacing: 0;
            color: #000000;
            opacity: 1;
        }

        .secondary-headline {
            text-align: center;
            font-size: 1em;
            line-height: 1em;
            font-family: Lupa Pinky, serif;
            letter-spacing: 0;
            color: #FFFFFF;
            opacity: 1;
        }
    `]
})
export class ProjectSelectionViewComponent implements OnInit {

    @Input() projects;

    constructor() {
    }

    ngOnInit(): void {
    }

}
