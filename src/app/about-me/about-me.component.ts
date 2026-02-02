import { Component } from '@angular/core';
import { SafePipe } from '../safe.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-about-me',
    imports: [SafePipe, MatIconModule],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
    cv_file: string = 'assets/data/cv.pdf';
    isOpenToWork: boolean = true;
    
    ngOnInit(){
        const currentLang = window.location.pathname.split('/')[2];
        if (currentLang === 'fr') {
            this.cv_file = 'assets/data/cv-fr.pdf';
        }
    }

    preventDefault(event: Event) {
        event.preventDefault();
    }
}
