import { Component } from '@angular/core';
import { SafePipe } from '../safe.pipe';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [SafePipe],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
    cv_file: string = 'assets/data/cv.pdf';

    preventDefault(event: Event) {
        event.preventDefault();
    }
}
