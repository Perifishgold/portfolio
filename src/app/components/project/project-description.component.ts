import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-project-description',
    template: `
        <div class="descriptionContainer">
            <h1>פרויקט גמר</h1>
            <span>בהנחיית אד' מוטי בודק</span>
            <h2>תכנון נופי אורבני לצד תעשייה קלה בשכונת טלפיות בי-ם</h2>
            <p>בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי קוואזי במר מודוף. אודיפו בלאסטיק מונופץ
                קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח
                לרעח.
                לת צשחמי קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ</p>
        </div>
    `,
    styles: [`
        .descriptionContainer {
            height: 100%;
            margin: 17% 25% auto;
        }

        h1 {
            display: inline-block;
            text-align: right;
            font-size: 55px;
            line-height: 25px;
            font-family: Lupa Pinky, serif;
            letter-spacing: 0;
            color: #B35656;
            opacity: 1;
        }

        span {
            text-align: right;
            font-size: 18px;
            line-height: 25px;
            font-family: Lupa Pinky, serif;
            letter-spacing: 0;
            color: #000000;
            opacity: 1;
        }

        h2 {
            text-align: right;
            font-size: 22px;
            line-height: 25px;
            font-family: Lupa Pinky, serif;
            letter-spacing: 0;
            color: #FFFFFF;
            opacity: 1;
        }

        p {
            text-align: right;
            font-size: 24px;
            line-height: 25px;
            font-family: Lupa Pinky, serif;
            letter-spacing: 0.6px;
            color: #000000;
            opacity: 1;
        }
    `]
})
export class ProjectDescriptionComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
