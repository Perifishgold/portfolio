import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <div class="header">

            </div>
            <div class="side-bar">
                <img class="profile-photo" src="../assets/img/profile.jpg" alt="profile-img">
            </div>
            <div class="content">
                <mat-tab-group animationDuration="0ms">
                    <mat-tab label="First">Content 1</mat-tab>
                    <mat-tab label="Second">Content 2</mat-tab>
                    <mat-tab label="Third">Content 3</mat-tab>
                </mat-tab-group>
            </div>
        </div>


        <router-outlet></router-outlet>
    `,
    styles: [`
        .container {
            height: 100%;

            display: grid;
            grid-template-columns: 1fr 4fr;
            grid-template-rows: 1fr 4fr;
            grid-column-gap: 10px;
            grid-template-areas: 'header header' 'side-bar content';
        }

        .header {
            
            grid-area: header;
        }

        .side-bar {
            grid-area: side-bar;
            background-color: #aabbd2;

            text-align: center;
        }

        .profile-photo {
            border-radius: 40px;
            width: 80px;
        }

        .content {
            grid-area: content;
            background-color: aliceblue;
        }


    `]
})
export class AppComponent {

}
