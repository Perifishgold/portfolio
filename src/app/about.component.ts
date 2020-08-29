import {Component, OnInit} from '@angular/core';

class TimelinePeriodDetails {
    years: string;
    headline: string;
    body: string;
}

@Component({
    selector: 'app-about',
    template: `
        <div class="container">
            <div class="headline">
                <img class="profile-photo" src="../assets/img/profile.jpg" alt="profile-img">
                <h2 class="section-heading">קורות חיים</h2>
                <h3 class="section-subheading text-muted">לורם איפסום דולור סיט אמט</h3>
            </div>

            <div class="timeline-panel" *ngFor="let timePeriod of timelinePeriods">
                <div class="timeline-heading">
                    <h3>{{timePeriod.years}}</h3>
                    <h4>{{timePeriod.headline}}</h4>
                </div>
                <p class="text-muted">{{timePeriod.body}}</p>
                <hr class="separator">
            </div>
        </div>
    `,
    styles: [`

        .container {
            padding-top: 20px;
            padding-right: 0.75rem;
            padding-left: 0.75rem;

            text-align: center;
        }

        .profile-photo {
            position: relative;
            height: 180px;
            border-radius: 100%;
            background-color: #fed136;
            margin: 20px 0;
        }

        .section-heading {
            font-size: 2.5rem;
            margin-top: 0;
            margin-bottom: 1rem;
        }

        .section-subheading {
            font-size: 1rem;
            font-weight: 400;
            font-style: italic;
            font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            margin-bottom: 4rem;
        }

        .text-muted {
            color: #6c757d !important;
        }

        .timeline-panel {
            width: 50%;
            position: relative;
            margin-bottom: 86px;

            margin-left: auto;
            margin-right: auto;
        }

        .timeline-heading {
            /*margin-top: 0;*/
            /*color: inherit;*/
        }

        .separator {
            border: none;
            border-top: 4px dotted #0022795c;
            height: 3px;
            width: 3%;
            margin-top: 47px;
        }
    `]
})

export class AboutComponent implements OnInit {
    public timelinePeriods: TimelinePeriodDetails[] = [];

    constructor() {
        let timelinePeriodDetails1 = new TimelinePeriodDetails();
        timelinePeriodDetails1.years = '2015-2020';
        timelinePeriodDetails1.headline = 'קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט';
        timelinePeriodDetails1.body = 'קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר';

        this.timelinePeriods.push(timelinePeriodDetails1);

        let timelinePeriodDetails2 = new TimelinePeriodDetails();
        timelinePeriodDetails2.years = '2014';
        timelinePeriodDetails2.headline = 'קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.';
        timelinePeriodDetails2.body = ' בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ';

        this.timelinePeriods.push(timelinePeriodDetails2);

        let timelinePeriodDetails3 = new TimelinePeriodDetails();
        timelinePeriodDetails3.years = '2008';
        timelinePeriodDetails3.headline = 'הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.';
        timelinePeriodDetails3.body = 'להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.';

        this.timelinePeriods.push(timelinePeriodDetails3);
    }

    ngOnInit(): void {
    }

}
