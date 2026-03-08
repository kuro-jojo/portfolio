import { Component } from '@angular/core';
import { SafePipe } from '../safe.pipe';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-about-me',
    imports: [SafePipe, MatIconModule],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
    cv_file: string = 'assets/data/cv.pdf';
    isOpenToWork: boolean = true;
    currentLang!: string;
    githubStatsApi: string = environment.githubStatsApi;
    githubStats!: string

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.currentLang = window.location.pathname.split('/')[2] || 'en';
        if (this.currentLang === 'fr') {
            this.cv_file = 'assets/data/cv-fr.pdf';
        }

        this.http.get(`${this.githubStatsApi}?username=kuro-jojo&show_icons=true&locale=${this.currentLang}`, { responseType: 'blob' })
            .subscribe(blob => {
                this.githubStats = URL.createObjectURL(blob);
            });
    }

    preventDefault(event: Event) {
        event.preventDefault();
    }
}
