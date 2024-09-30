import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [NgClass],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    currentLang: string = window.location.pathname.split('/')[2];


    switchLanguage(event: Event, language: string = '') {
        event.preventDefault();
        console.log('Path: ', window.location.pathname, window.location.href);
        window.location.href = window.location.pathname.replace(this.currentLang, language);
        this.currentLang = language;
    }
}
