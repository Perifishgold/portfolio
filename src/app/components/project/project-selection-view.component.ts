import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PortfolioProject, PortfolioProjects} from "../../models/portfolio-project.model";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-project-selection-view',
    template: `
        <div class="projectsSelectionContainer">
            <ng-container *ngFor="let project of this.projects; let i = index">
                <div appZoomIn class="square selectable-project" (click)="goToProject(project, i)">
                    <div class="content">
                        <div class="primary-headline">{{project.projectSelectionView["primary-headline"]}}</div>
                        <div class="secondary-headline">{{project.projectSelectionView["secondary-headline"]}}</div>
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
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .primary-headline {
            text-align: center;
            font-size: 1.5em;
            line-height: 2em;
            font-family: LupaPinky, serif;
            letter-spacing: 0;
            color: #000000;
            opacity: 1;
        }

        .secondary-headline {
            text-align: center;
            font-size: 1em;
            line-height: 1em;
            font-family: LupaPinky, serif;
            letter-spacing: 0;
            color: #FFFFFF;
            opacity: 1;
        }
    `]
})
export class ProjectSelectionViewComponent implements OnInit, OnDestroy {
    projects: PortfolioProject[];
    private subscription: Subscription

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
         this.subscription = this.route.data.subscribe(data => {
            let portfolioProjects = data.projectsCollection as PortfolioProjects;
            this.projects = portfolioProjects.projects;
        });
    }

    goToProject(project: PortfolioProject, index: number) {
        let collection = `${this.route.snapshot.paramMap.get('collection')}`;
        let url = `project;collection=${collection};index=${index}`;
        this.router.navigateByUrl(url, {state: {project: project}});
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

}
