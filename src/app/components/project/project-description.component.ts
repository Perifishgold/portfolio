import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-project-description',
    template: `
        <div class="descriptionContainer">
            <h1>פרויקט גמר</h1>
            <span>בהנחיית אד' מוטי בודק</span>
            <h2>תכנון נופי אורבני לצד תעשייה קלה בשכונת טלפיות בי-ם</h2>
            <p>הפרוייקט עוסק בבחינת אתר שדה התעופה באילת, שהוקם יחד עם העיר בשנות ה50, שלאחרונה נסגר ובמקומו הוקם שדה"ע רמון, כ 20 ק"מ מחוץ לעיר.
                התכנון מבקש לקשור בין המרקמים העירוניים והאנושיים הנקטעים בשטחו העצום של השדה שיוצר סיטואציה עירונית חריגה, כזו שנוצרת הפרדה, בכל תחומי החיים, בין העיר אילת לעיר התיירותית. שלב המחקר וניתוח האתר התמקד בחיפוש אחר אופיה ומאפייניה הייחודיים של העיר, כעיר קצה-ים–מדבר ונופש בהיבטים האדריכליים, הגאוגרפיים והאנושיים.</p>
        </div>
    `,
    styles: [`
        .descriptionContainer {
            height: 100%;
            margin: 17% 16% auto;
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
